import { Link } from "@inertiajs/react";

export default function StatusButtons({ order }) {

    return (
        <div className="flex flex-col sm:flex-row flex-wrap justify-center p-4 bg-white">
            <Link
                href={route("orders.updateStatus", {
                    order,
                    status: "pending",
                })}
                method="put"
                className=" text-center status-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
            >
                   Pending
            </Link>
            <Link
                href={route("orders.updateStatus", {
                    order,
                    status: "processing",
                })}
                method="put"
                className=" text-center status-button bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
            >
                Processing
            </Link>
            <Link
                href={route("orders.updateStatus", {
                    order,
                    status: "completed",
                })}
                method="put"
                className=" text-center status-button bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
            >
                Completed
            </Link>
            <Link
                href={route("orders.updateStatus", {
                    order,
                    status: "canceled",
                })}
                method="put"
                className=" text-center status-button bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
            >
                Cancel
            </Link>
        </div>
    );
}