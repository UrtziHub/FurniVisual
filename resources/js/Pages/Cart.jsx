    import CartCard from "@/Components/CartCard";
import PageLayout from "@/Layouts/PageLayout";
import {Link} from "@inertiajs/react";

export default function Cart({auth, cart, total}) {
    return (
        <PageLayout user={auth.user} headTitle={"Cart"}>
            <div className="flex flex-col md:flex-row bg-gray-100 p-10 gap-2">
                <div className="rounded flex flex-1 flex-col gap-2">
                    {cart.products.length > 0 ? (
                        cart.products.map((product) => (
                            <CartCard
                                key={product.id}
                                cart={cart} 
                                product={product}
                            />
                        ))
                    ) : (
                        <div className="bg-white p-10 rounded shadow-lg flex flex-col items-center">
                       <p className="text-3xl font-bold mb-4">Empty cart</p>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="100pt" height="100pt" viewBox="0 0 225.000000 225.000000"
                         preserveAspectRatio="xMidYMid meet">
                    
                        <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M1260 2120 l0 -130 65 0 65 0 0 130 0 130 -65 0 -65 0 0 -130z"/>
                        <path d="M810 2035 l-45 -45 93 -93 92 -92 45 45 45 45 -90 93 c-49 50 -91 92
                        -93 92 -1 0 -23 -20 -47 -45z"/>
                        <path d="M1695 1990 l-90 -90 48 -47 47 -48 92 92 93 93 -45 45 c-24 25 -47
                        45 -50 45 -3 0 -46 -41 -95 -90z"/>
                        <path d="M115 1826 c-55 -24 -115 -112 -115 -168 0 -5 29 -8 63 -8 58 0 65 2
                        75 25 15 33 49 45 127 45 74 0 110 -11 124 -39 8 -14 172 -667 256 -1018 4
                        -16 -3 -26 -28 -42 -93 -57 -110 -201 -35 -287 43 -49 62 -57 146 -63 l74 -6
                        1 -72 c2 -63 5 -75 33 -110 47 -57 89 -78 159 -78 73 0 123 27 163 88 22 33
                        27 53 28 106 l1 66 203 0 204 0 -3 -57 c-7 -167 174 -265 309 -167 109 79 105
                        242 -8 320 l-36 24 -577 5 c-630 5 -600 2 -614 62 -5 21 -1 33 19 52 l25 26
                        620 0 620 0 10 38 c6 20 73 255 149 522 l139 485 -848 3 -847 2 -17 73 c-19
                        85 -44 126 -99 161 -38 25 -47 26 -166 26 -80 -1 -136 -5 -155 -14z m1863
                        -718 c-54 -189 -105 -367 -113 -395 l-16 -53 -534 0 c-500 0 -534 1 -539 18
                        -10 34 -186 755 -186 763 0 5 334 9 743 9 l743 0 -98 -342z m-933 -871 c8 -12
                        15 -30 15 -41 0 -28 -39 -66 -67 -66 -52 0 -84 78 -45 112 35 31 73 29 97 -5z
                        m790 0 c8 -12 15 -30 15 -41 0 -28 -39 -66 -67 -66 -52 0 -84 78 -45 112 35
                        31 73 29 97 -5z"/>
                        </g>
                        </svg>
                        <Link
                            href={route("catalogue")}
                            className="mt-4 py-2 px-10 bg-black text-white font-black rounded-xl hover:bg-neutral-900"
                        >
                            Return to shop
                        </Link>
                    </div>
                    
                    
                    )}
                </div>
                {cart.products.length > 0 && <div className="bg-white p-4 flex flex-col shadow-lg rounded">
                    <h1 className="text-2xl font-bold mb-2 underline">
                        Summary
                    </h1>
                    <h1>Delivery</h1>
                    <div>
                        <h1>Free | Express</h1>
                    </div>
                    <div className="flex-1 flex flex-col justify-end">
                        <h1 className="text-xl border-b-2 font-bold">
                            Cart Total
                        </h1>
                        <div>
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between">
                                    <h1 className="font-semibold">Subtotal:</h1>
                                    <h1>{total}</h1>
                                </div>
                                <div className="flex justify-between border-b-2">
                                    <h1 className="font-semibold">VAT:</h1>
                                    <h1>{" 0 "}</h1>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 mb-2">
                                <h1 className="font-semibold">Total:</h1>
                                <h1>{total}</h1>
                            </div>
                        </div>
                        <Link href={route('checkout')} method="POST"
                              className="bg-black text-white font-bold px-10 py-2 rounded-xl">
                            Proceed to checkout
                        </Link>
                    </div>
                </div>}
            </div>
        </PageLayout>
    );
}
