import React from "react";
import PageLayout from "@/Layouts/PageLayout";
import ViewCard from "@/Components/ViewCard";
import { Link } from "@inertiajs/react";
import StatusBar from "@/Components/StatusBar";
import StatusButtons from "@/Components/StatusButtons";

const OrderDetailsPage = ({ auth, order, cart }) => {
    const is_admin = auth.user.is_admin;
    return (
        <PageLayout
            user={auth.user}
            className="bg-slate-100"
            headTitle={"Orders"}
        >
            <div className="container mx-auto py-8 px-4 md:px-0">
                <h1 className="text-3xl font-semibold mb-8">
                    {order.order_number} - Order Number
                </h1>

                <StatusBar currentStatus={order.status}></StatusBar>
                {/* Información del Pedido */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-8 md:flex justify-between">
                    <div className="mb-4 md:mb-0 md:w-1/2 flex flex-col justify-center text-xl">
                        <h1 className="text-3xl mb-10 font-bold uppercase">
                            Order Information:{" "}
                        </h1>
                        <div className="mb-4">
                            <span className="font-semibold">
                                Customer Name:
                            </span>{" "}
                            {order.user.name}
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Mail:</span>{" "}
                            {order.email}
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Date:</span>{" "}
                            {new Date(order.created_at).toLocaleDateString()}
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Price:</span>{" "}
                            {order.total_price}€
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                        <div className="rounded flex flex-col gap-2">
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

                {!!is_admin && <StatusButtons order={order} />}
            </div>
        </PageLayout>
    );
};

export default OrderDetailsPage;
