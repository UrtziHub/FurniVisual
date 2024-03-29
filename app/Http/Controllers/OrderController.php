<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\StripeClient;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Order/Order', [
            'orders' => Order::all(),
        ]);
    }

    public function indexUser(User $user)
    {
        $user = auth()->user();

        $orders = Order::where("user_id", $user->id)->get();

        return Inertia::render('Order/Order', compact('orders'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function view(Order $order)
    {
        // Solo permitir que el usuario autenticado vea su propia orden
        if (auth()->id() !== $order->user_id) {
            return redirect()->route('orders.indexUser');
        }

        $order = Order::find($order->id);
        $order->load('user');
        $cart = $order->cart;
        $products = $cart->load('products');

        return Inertia::render('Order/OrderView', compact('order', 'cart', 'products'));
    }

    /**
     * Handle successful checkout.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Inertia\Response
     */
    public function checkout()
    {
        //Stripe checkout
        $user = auth()->user();
        $cart = $user->carts->where('active', true)->first();

        if (!$cart || count($cart->products) === 0) {
            return back();
        }

        Stripe::setApiKey(env('STRIPE_SECRET'));

        $products = $cart->products;
        $stripe = new StripeClient(env('STRIPE_SECRET'));
        $total_price = 0;
        $lineItems = [];
        foreach ($products as $product) {
            $total_price += $product->price;
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $product->name,
                    ],
                    'unit_amount' => $product->price * 100,
                ],
                'quantity' => 1,
            ];
        }
        $session = \Stripe\Checkout\Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancel', [], true),
        ]);

        $order = new Order();
        $order->user_id = $user->id;
        $order->cart_id = $cart->id;
        $order->status = 'unpaid';
        $order->order_number = 'ORD - ' . strtoupper(str_pad(dechex(mt_rand()), 8, '0', STR_PAD_LEFT));
        $order->tax_number = rand(100000, 999999);
        $order->zip = rand(10000, 99999);
        $order->phone = $user -> phone;
        $order->email = $user -> email;
        $order->total_price = $total_price;
        $order->session_id = $session->id;
        $order->save();

        return Inertia::render('Checkout', ['checkoutUrl' => $session->url]);
    }

    /**
     * Handle successful checkout.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Inertia\Response
     */
    public function success(Request $request)
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
        $sessionId = $request->get('session_id');

        try {
            $session = $stripe->checkout->sessions->retrieve($sessionId);

            if (!$session) {
                throw new NotFoundHttpException;
            }
            //$customer = $stripe->customers->retrieve($session->customer);

            $order = Order::where('session_id', $session->id)->first();
            if (!$order) {
                throw new NotFoundHttpException();
            }
            return Inertia::render('CheckoutSuccess', compact('order')); //, compact('customer'));

        } catch (\Exception $e) {
            throw new NotFoundHttpException();
        }
    }

    /**
     * Handle cancelled checkout.
     *
     * @return \Inertia\Response
     */
    public function cancel()
    {
        return Inertia::render('CheckoutCancel');
    }

    /**
     * Handle Stripe webhooks.
     *
     * @return \Illuminate\Http\Response
     */
    public function webhook()
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        // This is your Stripe CLI webhook secret for testing your endpoint locally.
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');

        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload,
                $sig_header,
                $endpoint_secret
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            return response('', 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            return response('', 400);
        }

        // Handle the event
        switch ($event->type) {
            case 'checkout.session.completed':
                $session = $event->data->object;

                $order = Order::where('session_id', $session->id)->first();
                if ($order && $order->status === 'unpaid') {
                    $order->status = 'pending';
                    $order->save();

                    $user = User::find($order->user_id);
                    $cart = $user->carts->where('active', true)->first();

                    $cart->active = false;
                    $activeCart = Cart::create(['active' => true,]);
                    $activeCart->save();
                    $user->carts()->attach($activeCart);
                    $cart->save();
                    // Send email to customer
                }

                // ... handle other event types
            default:
                echo 'Received unknown event type ' . $event->type;
        }

        return response('');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Order $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Order $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Order $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Order $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }

    /**
     * Update the status of an order.
     *
     * @param Request $request
     * @param Order $order
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updateStatus(Request $request, Order $order)
    {
        $request->validate([
            'status' => 'required|max:255',
        ]);

        $order->status = $request->status;
        $order->save();

        return redirect()->back();
    }
}
