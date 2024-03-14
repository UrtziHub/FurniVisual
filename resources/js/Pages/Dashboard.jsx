import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageLayout from "@/Layouts/PageLayout";
import { Head, Link } from "@inertiajs/react";
import {
    FaUserAlt,
    FaRoad,
    FaCreditCard,
    FaShoppingCart,
} from "react-icons/fa";
import { IoCart, IoExit, IoMail } from "react-icons/io5";

export default function Dashboard(props) {
    return (
        /*rol_id == 2*/

        <PageLayout
            user={props.auth.user}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 my-8">
                <Link
                    href={route("profile.edit")}
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <FaUserAlt className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        Profail
                    </div>
                </Link>
                <Link
                    href={route("category.index")}
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <IoMail className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        Orders(Categories)
                    </div>
                </Link>
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <IoCart className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        Cart
                    </div>
                </Link>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <FaRoad className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        Adresses
                    </div>
                </Link>
                <Link
                    href={route("product.index")}
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <FaCreditCard className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        Pays(Products)
                    </div>
                </Link>
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <IoExit className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        Log out
                    </div>
                </Link>
            </section>
        </PageLayout>
    );
}
