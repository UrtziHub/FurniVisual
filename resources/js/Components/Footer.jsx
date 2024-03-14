import { Link } from "@inertiajs/react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
    const curretYear = new Date().getFullYear();
    return (
        <div className="px-4 gb-white flex flex-col items-center w-full border-t bg-white mt-4">
            <div className="flex py-4 text-5xl uppercase">
                <h1 className="bg-black text-white p-2 rounded-s-md">Furni</h1>
                <h1 className="bg-slate-100 p-2 rounded-e-md">Visual</h1>
            </div>
            <div className="flex justify-center w-full gap-10">
                <ul className="space-y-2 &>[]">
                    <h1 className="text-lg font-bold underline-offset-2 underline">
                        Home
                    </h1>
                    <li>
                        <Link href="/">Catalogue</Link>
                    </li>
                    <li>
                        <Link href="/">Cart</Link>
                    </li>
                    <li>
                        <Link href="/">Login</Link>
                    </li>
                    <li>
                        <Link href="/">Register</Link>
                    </li>
                </ul>
                <ul className="space-y-2">
                    <h1 className="text-lg font-bold underline-offset-2 underline">
                        Company
                    </h1>
                    <li>
                        <Link href="/">About us </Link>📍
                    </li>
                    <li>
                        <Link href="/">Shop</Link>
                    </li>
                    <li>
                        <Link href="/how-order">How to order</Link>
                    </li>
                </ul>
                <ul className="space-y-2">
                    <h1 className="text-lg font-bold underline-offset-2 underline">
                        Constact
                    </h1>
                    <li>
                        <Link href="/">Our website</Link>
                    </li>
                    <li>
                        <Link href="/">Mail ✉️</Link>
                    </li>
                    <li>
                        <Link href="/">Shop</Link>
                    </li>
                </ul>
            </div>
            
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-96 h-px my-8 bg-neutral-300 border-0 " />
                <span className="absolute px-3 font-medium -translate-x-1/2 left-1/2">
                    <div className="flex bg-white px-2 gap-3 text-2xl"> 
                        <FaInstagram className="hover:text-purple-400 cursor-pointer transition duration-300 ease-in-out"/>
                        <FaYoutube className="hover:text-red-400 cursor-pointer transition duration-300 ease-in-out"/>
                        <FaFacebook className="hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out"/>
                        <FaTwitter className="hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out"/>
                    </div>
                </span>
            </div>
            <div>
                <p className="text-neutral-500">© {curretYear}. Developed By FurniVisual</p>
            </div>
        </div>
    );
}