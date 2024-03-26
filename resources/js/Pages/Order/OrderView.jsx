import React from "react";
import PageLayout from "@/Layouts/PageLayout";
import ViewCard from "@/Components/ViewCard";

const OrderDetailsPage = ({ auth, order, cart }) => {
    console.log(cart);    
    return (
        <PageLayout
            user={auth.user}
            className="bg-slate-100"
            headTitle={"Orders"}
        >
            <div className="mx-2 xl:mx-64 py-8">
                <h1 className="text-3xl font-semibold mb-8">
                    {order.order_number} - Order Info
                </h1>

                {/* Información del Pedido */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex justify-around">
                    <div className="flex flex-col justify-center">
                        <div className="mb-4">
                            <span className="font-semibold">
                                Customer Name:
                            </span>
                            {order.user.name}
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Mail:</span>{" "}
                            {order.email}
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Fecha:</span>{" "}
                            {new Date(order.created_at).toLocaleDateString()}
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Price</span>{" "}
                            {order.total_price}€
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">
                                Ccustomer comments:
                            </span>{" "}
                            {order.notes}
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Status:</span>{" "}
                            {order.status}
                        </div>
                    </div>
                    <div>
                        <div className="rounded flex flex-1 flex-col gap-2">
                            {cart.products.map((product) => (
                                <ViewCard
                                    key={product.id}
                                    order={order}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Botones de Estado del Pedido */}
                <div className="flex items-center space-x-4 justify-center p-4 bg-white-500">
                    <button className="status-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Pendiente
                    </button>
                    <button className="status-button bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        En Proceso
                    </button>
                    <button className="status-button bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Enviado
                    </button>
                    <button className="status-button bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Cancelado
                    </button>
                </div>
            </div>
        </PageLayout>
    );
};

export default OrderDetailsPage;
