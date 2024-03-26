import { Link } from "@inertiajs/react";

export default function StatusButtons({ order }) {

    return (
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
    );
}
