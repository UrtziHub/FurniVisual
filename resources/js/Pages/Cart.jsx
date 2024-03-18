import CartCard from "@/Components/CartCard";
import PageLayout from "@/Layouts/PageLayout";

export default function Cart({ auth, cart }) {
    console.log(cart);
    return (
        <PageLayout user={auth.user}>
            <div className="flex bg-gray-100 p-10 gap-2">
                <div className="rounded flex flex-1 flex-col gap-2">
                    {cart.products.map((product) => (
                        <CartCard key={product.id} cart={cart} product={product} />
                    ))}
                </div>
                <div className="bg-white p-4 flex flex-col shadow-lg rounded">
                    <h1 className="text-2xl font-bold mb-2 underline">Summary</h1>
                    <h1>Delivery</h1>
                    <div>
                        <h1>Free | Express</h1>
                    </div>
                    <div className="flex-1 flex flex-col justify-end">
                        <h1 className="text-xl border-b-2 font-bold">Cart Total</h1>
                        <div >
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between">
                                    <h1 className="font-semibold">Subtotal:</h1>
                                    <h1>{" 120 "}</h1>
                                </div>
                                <div className="flex justify-between border-b-2">
                                    <h1 className="font-semibold">VAT:</h1>
                                    <h1>{" 0 "}</h1>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 mb-2">
                                <h1 className="font-semibold">Total:</h1>
                                <h1>{" 120 "}</h1>
                            </div>
                        </div>
                        <button className="bg-black text-white font-bold px-10 py-2 rounded-xl">
                            Procced to checkout
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}