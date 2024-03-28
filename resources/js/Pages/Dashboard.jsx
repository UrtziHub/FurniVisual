import PageLayout from "@/Layouts/PageLayout";
import {FaUserAlt, FaRoad, FaCreditCard, FaUserEdit, FaClipboardList} from "react-icons/fa";
import {IoCart, IoExit, IoMail, IoBag} from "react-icons/io5";
import {BiSolidCategory} from "react-icons/bi";
import DashboardCard from "@/Components/DashboardCard";
import {Link} from "@inertiajs/react";

export default function Dashboard({auth, errors}) {
    const {is_admin} = auth.user;

    const commonProps = {
        className: "inline-block text-3xl mb-4 scale-150"
    };

    const cards = [
        {href: route("profile.edit"), icon: <FaUserAlt {...commonProps} />, text: "Profile"},
        {
            href: is_admin ? route("admin.category.index") : route("orders.indexUser"),
            icon: is_admin ? <BiSolidCategory {...commonProps} /> : <IoMail {...commonProps} />,
            text: is_admin ? "Categories" : "Orders"
        },
        {
            href: is_admin ? route("user.index") : route("cart.index"),
            icon: is_admin ? <FaUserEdit  {...commonProps} /> : <IoCart {...commonProps} />,
            text: is_admin ? "User" : "Cart"
        },
        {
            href: is_admin ? route("orders.index") : route("dashboard"),
            icon: is_admin ? <FaClipboardList  {...commonProps} /> : <FaRoad {...commonProps} />,
            text: is_admin ? "Orders" : "Addresses"
        },
        {
            href: is_admin ? route("admin.product.index") : route("dashboard"),
            icon: is_admin ? <IoBag {...commonProps} /> : <FaCreditCard {...commonProps} />,
            text: is_admin ? "Products" : "Pays"
        },
    ];

    return (
        <>
            <PageLayout user={auth.user} errors={errors} headTitle={"Dashboard"}>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 py-10">
                    {cards.map((card, index) => (
                        <DashboardCard key={index} {...card} />
                    ))}
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="text-center p-4 transform transition duration-500 hover:scale-110"
                    >
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                            <h2 className="text-2xl font-bold mb-2">
                                <IoCart className="inline-block text-3xl mb-4 scale-150"/>
                            </h2>
                            Log Out
                        </div>
                    </Link>
                </section>
            </PageLayout>
        </>
    );
}
