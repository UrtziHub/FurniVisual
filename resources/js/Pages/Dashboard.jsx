import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageLayout from "@/Layouts/PageLayout";
import { Head } from "@inertiajs/react";
import { FaUserAlt, FaRoad, FaCreditCard, FaShoppingCart   } from "react-icons/fa";
import { IoExit, IoMail  } from "react-icons/io5";



export default function Dashboard(props) {
    return (    
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
        <div className="text-center p-4 transform transition duration-500 hover:scale-110">
            <a href="#" className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                <h2 className="text-2xl font-bold mb-2">
                    <FaUserAlt className="inline-block text-3xl mb-4 scale-150" />
                </h2> 
                <p>Profile</p>
            </a>
        </div>
        <div className="text-center p-4 transform transition duration-500 hover:scale-110">
            <a href="#" className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                <h2 className="text-2xl font-bold mb-2">
                    <IoMail className="inline-block text-3xl mb-4 scale-150" />
                </h2> 
                <p>Orders</p>
            </a>
        </div>
        <div className="text-center p-4 transform transition duration-500 hover:scale-110">
            <a href="#" className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                <h2 className="text-2xl font-bold mb-2">
                    <FaShoppingCart  className="inline-block text-3xl mb-4 scale-150" />
                </h2> 
                <p>Cart</p>
            </a>
        </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        <div className="text-center p-4 transform transition duration-500 hover:scale-110">
            <a href="#" className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                <h2 className="text-2xl font-bold mb-2">
                    <FaRoad className="inline-block text-3xl mb-4 scale-150" />
                </h2> 
                <p>Addresses</p>
            </a>
        </div>
        <div className="text-center p-4 transform transition duration-500 hover:scale-110">
            <a href="#" className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                <h2 className="text-2xl font-bold mb-2">
                    <FaCreditCard  className="inline-block text-3xl mb-4 scale-150" />
                </h2> 
                <p>Payments</p>
            </a>
        </div>
        <div className="text-center p-4 transform transition duration-500 hover:scale-110">
            <a href="#" className="bg-gray-100 rounded-lg shadow-lg p-6 block">
                <h2 className="text-2xl font-bold mb-2">
                    <IoExit  className="inline-block text-3xl mb-4 scale-150" />
                </h2> 
                <p>Log out</p>
            </a>
        </div>
    </section>
</PageLayout>
    );
}
