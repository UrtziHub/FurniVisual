import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageLayout from "@/Layouts/PageLayout";
import {Head, Link} from "@inertiajs/react";
import {
    FaUserAlt,
    FaRoad,
    FaCreditCard,
    FaShoppingCart,
} from "react-icons/fa";
import {IoCart, IoExit, IoMail, IoBag} from "react-icons/io5";
import {BiSolidCategory} from "react-icons/bi";

export default function Dashboard(props) {
    const {is_admin} = props.auth.user;

    return (
        <PageLayout
            user={props.auth.user}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 ">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard"/>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 my-8">
                <Link
                    href={route("profile.edit")}
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <FaUserAlt className="inline-block text-3xl mb-4 scale-150"/>
                        </h2>
                        Profile
                    </div>
                </Link>
                {is_admin ? (
                    <Link
                        href={route("category.index")}
                        as="button"
                        className="text-center p-4 transform transition duration-500 hover:scale-110"
                    >
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                            <h2 className="text-2xl font-bold mb-2">
                                <BiSolidCategory className="inline-block text-3xl mb-4 scale-150"/>
                            </h2>
                            Categories
                        </div>
                    </Link>
                ) : (
                    <Link
                        href={route("dashboard")}
                        //method="post"
                        as="button"
                        className="text-center p-4 transform transition duration-500 hover:scale-110"
                    >
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                            <h2 className="text-2xl font-bold mb-2">
                                <IoMail className="inline-block text-3xl mb-4 scale-150"/>
                            </h2>
                            Orders
                        </div>
                    </Link>
                )}
                {is_admin ? (
                    <Link
                        href={route("user.index")}
                        //method="post"
                        as="button"
                        className="text-center p-4 transform transition duration-500 hover:scale-110"
                    >
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                            <h2 className="text-2xl font-bold mb-2">
                                <IoCart className="inline-block text-3xl mb-4 scale-150"/>
                            </h2>
                            User
                        </div>
                    </Link>
                ) : (
                    <Link
                        href={route("dashboard")}
                        // method="post"
                        as="button"
                        className="text-center p-4 transform transition duration-500 hover:scale-110"
                    >
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                            <h2 className="text-2xl font-bold mb-2">
                                <FaCreditCard className="inline-block text-3xl mb-4 scale-150"/>
                            </h2>
                            Users Management
                        </div>
                    </Link>
                )}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
                <Link
                    href={route("dashboard")}
                    // method="post"
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <FaRoad className="inline-block text-3xl mb-4 scale-150"/>
                        </h2>
                        Addresses
                    </div>
                </Link>
                {is_admin ? (
                    <Link
                        href={route("admin.product.index")}
                        as="button"
                        className="text-center p-4 transform transition duration-500 hover:scale-110"
                    >
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                            <h2 className="text-2xl font-bold mb-2">
                                <IoBag className="inline-block text-3xl mb-4 scale-150"/>
                            </h2>
                            Products
                        </div>
                    </Link>
                ) : (
                    <Link
                        href={route("dashboard")}
                        // method="post"
                        as="button"
                        className="text-center p-4 transform transition duration-500 hover:scale-110"
                    >
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                            <h2 className="text-2xl font-bold mb-2">
                                <FaCreditCard className="inline-block text-3xl mb-4 scale-150"/>
                            </h2>
                            Pays
                        </div>
                    </Link>
                )}
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="text-center p-4 transform transition duration-500 hover:scale-110"
                >
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                        <h2 className="text-2xl font-bold mb-2">
                            <IoExit className="inline-block text-3xl mb-4 scale-150"/>
                        </h2>
                        Log out
                    </div>
                </Link>
            </section>
        </PageLayout>
    );
}
