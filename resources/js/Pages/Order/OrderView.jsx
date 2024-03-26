import React from "react";
import PageLayout from "@/Layouts/PageLayout";
import ViewCard from "@/Components/ViewCard";
import { Link, router, useForm } from "@inertiajs/react";

const OrderDetailsPage = ({ auth, order, cart }) => {
    const { data, setData, put, processing, errors } = useForm({
        status: order.status,
    });
    const handleStatusChange = (e) => {
        setData("status", e.target.value);
        put(route("orders.updateStatus", order));
    };

    const statusColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-blue-500";
            case "processing":
                return "bg-orange-500";
            case "completed":
                return "bg-green-500";
            case "canceled":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <PageLayout
            user={auth.user}
            className="bg-slate-100"
            headTitle={"Orders"}
        >
            <div className="container mx-auto py-8 px-4 md:px-0">
                <h1 className="text-3xl font-semibold mb-8">
                    {order.order_number} - Order Info
                </h1>

                {/* Información del Pedido */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-8 md:flex justify-between">
                    <div className="mb-4 md:mb-0 md:w-1/2">
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
                                Customer comments:
                            </span>{" "}
                            {order.notes}
                        </div>
                        <div className={` mx-auto text-center ${statusColor(order.status)} text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 md:mr-2`}>
                            {order.status}
                        </div>
                    </div>
                    <div className="md:w-1/2">
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

                {/* Botones de Estado del Pedido */}
                <div className="flex flex-wrap justify-center p-4 bg-white">
                    <Link
                        href={route("orders.updateStatus", {
                            order,
                            status: "pending",
                        })}
                        method="put"
                        className="status-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 md:mr-2"
                    >
                        Pendiente
                    </Link>
                    <Link
                        href={route("orders.updateStatus", {
                            order,
                            status: "processing",
                        })}
                        method="put"
                        className="status-button bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 md:mr-2"
                    >
                        En Proceso
                    </Link>
                    <Link
                        href={route("orders.updateStatus", {
                            order,
                            status: "completed",
                        })}
                        method="put"
                        className="status-button bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 md:mr-2"
                    >
                        Enviado
                    </Link>
                    <Link
                        href={route("orders.updateStatus", {
                            order,
                            status: "canceled",
                        })}
                        method="put"
                        className="status-button bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 md:mr-2"
                    >
                        Cancelado
                    </Link>
                </div>
            </div>
        </PageLayout>
    );
};

export default OrderDetailsPage;
