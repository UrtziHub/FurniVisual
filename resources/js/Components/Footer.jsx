import {Link} from "@inertiajs/react";
import {FaInstagram, FaYoutube, FaTwitter, FaFacebook} from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="px-4 gb-white flex flex-col items-center w-full border-t bg-white mt-4">
            <div className="flex py-4 text-5xl uppercase">
                <h1 className="bg-black text-white p-2 rounded-s-md">Furni</h1>
                <h1 className="bg-slate-100 p-2 rounded-e-md">Visual</h1>
            </div>

            <div className="flex justify-center w-full gap-10">
                <ul className="space-y-2 &>[]">
                    <h1 className="text-lg font-bold underline-offset-2 underline">
                        <Link className={"text-lg font-bold underline-offset-2 underline"} href={route("catalogue")}
                              as="button">
                            Catalogue
                        </Link>
                    </h1>
                    <li>
                        <Link href={route("categoryProduct", 1)} as="button">
                            Center Tables
                        </Link>
                    </li>
                    <li>
                        <Link href={route("categoryProduct", 3)} as="button">
                            Fireplaces
                        </Link>
                    </li>
                    <li>
                        <Link href={route("categoryProduct", 6)} as="button">
                            Interiors
                        </Link>
                    </li>
                    <li>
                        <Link href={route("categoryProduct", 4)} as="button">
                            Kitchens
                        </Link>
                    </li>
                    <li>
                        <Link href={route("categoryProduct", 5)} as="button">
                            Leisure Furniture
                        </Link>
                    </li>
                    <li>
                        <Link href={route("categoryProduct", 2)} as="button">
                            Tables and Chairs
                        </Link>
                    </li>
                </ul>
                <ul className="space-y-2">
                    <h1 className="text-lg font-bold underline-offset-2 underline">
                        Company
                    </h1>
                    <li>
                        <Link href={route("about")} as="button">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href={route("how-order")} as="button">
                            How to order
                        </Link>
                    </li>
                    <li>
                        <Link href={route("privacy")} as="button">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href={route("regulations")} as="button">
                            Terms of Service
                        </Link>
                    </li>
                </ul>
                <ul className="space-y-2">
                    <h1 className="text-lg font-bold">
                        <Link href={route("contact")} as="button" className="underline">
                            Contact
                        </Link>
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
                <hr className="w-96 h-px my-8 bg-neutral-300 border-0 "/>
                <span className="absolute px-3 font-medium -translate-x-1/2 left-1/2">
                    <div className="flex bg-white px-2 gap-3 text-2xl">
                        <a href="https://www.instagram.com/erynek3d/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-fuchsia-400 cursor-pointer transition duration-300 ease-in-out"/>
                        </a>
                        <a href="https://www.youtube.com/@erynek3d/videos" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="hover:text-red-600 cursor-pointer transition duration-300 ease-in-out"/>
                        </a>
                        <a href="https://www.facebook.com/Erynek3D" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out"/>
                        </a>
                        <a href="https://twitter.com/Erynek3D" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out"/>
                        </a>
                    </div>
                </span>
            </div>
            <div>
                <p className="text-neutral-500">
                    © {currentYear}. Developed By FurniVisual
                </p>
            </div>
        </div>
    );
}
