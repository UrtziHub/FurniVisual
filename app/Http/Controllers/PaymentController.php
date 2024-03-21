<?php
//
//namespace App\Http\Controllers;
//
//use App\Models\Payment;
//use Illuminate\Http\Request;
//use Laravel\Cashier\Cashier;
//
//class PaymentController extends Controller
//{
//    /**
//     * Display a listing of the resource.
//     *
//     * @return \Illuminate\Http\Response
//     */
//    public function index()
//    {
//        // Retrieving Customers
//        $user = Cashier::findBillable($stripeId);
//        // Creating Customers without a subscription
//        $stripeCustomer = $user->createAsStripeCustomer();
//        //View the balance
//        $balance = $user->balance();
//
//        // Retrieve all transactions...
//        $transactions = $user->balanceTransactions();
//
//        foreach ($transactions as $transaction) {
//            // Transaction amount...
//            $amount = $transaction->amount(); // $2.31
//
//            // Retrieve the related invoice when available...
//            $invoice = $transaction->invoice();
//        }
//    }
//
//    /**
//     * Show the form for creating a new resource.
//     *
//     * @return \Illuminate\Http\Response
//     */
//    public function create()
//    {
//        $paymentMethods = $user->paymentMethods('paypal');
//    }
//
//    /**
//     * Store a newly created resource in storage.
//     *
//     * @param \Illuminate\Http\Request $request
//     * @return \Illuminate\Http\Response
//     */
//    public function store(Request $request)
//    {
//        //
//    }
//
//    /**
//     * Display the specified resource.
//     *
//     * @param \App\Models\Payment $payment
//     * @return \Illuminate\Http\Response
//     */
//    public function show(Payment $payment)
//    {
//        //
//    }
//
//    /**
//     * Show the form for editing the specified resource.
//     *
//     * @param \App\Models\Payment $payment
//     * @return \Illuminate\Http\Response
//     */
//    public function edit(Payment $payment)
//    {
//        //
//    }
//
//    /**
//     * Update the specified resource in storage.
//     *
//     * @param \Illuminate\Http\Request $request
//     * @param \App\Models\Payment $payment
//     * @return \Illuminate\Http\Response
//     */
//    public function update(Request $request, Payment $payment)
//    {
//        $stripeCustomer = $user->updateStripeCustomer($options);
//    }
//
//    /**
//     * Remove the specified resource from storage.
//     *
//     * @param \App\Models\Payment $payment
//     * @return \Illuminate\Http\Response
//     */
//    public function destroy(Payment $payment)
//    {
//        //
//    }
//}
