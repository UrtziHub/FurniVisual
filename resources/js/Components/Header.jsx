import { Link } from "@inertiajs/react";
import { IoHome, IoImage, IoInformationCircleSharp, IoSearch, IoCart, IoLogIn   } from "react-icons/io5";

import NavLink from "./NavLink";

const navlinks = [
    {
        icon: <IoHome className="text-4xl" />,
        text: "Home",
        href: "home",
    },
    {
        icon: <IoImage className="text-4xl" />,
        text: "Catalogue",
        href: "dashboard",
    },
    {
        icon: <IoInformationCircleSharp className="text-4xl" />,
        text: "About us",
        href: "dashboard",
    },
    {
        icon: <IoLogIn  className="text-4xl" />,
        text: "Login",
        href: "dashboard",
    },
];

const Header = () => {
    return (
        <header className="bg-gray-100 w-screen flex justify-around items-center p-5 border-b border-gray-200 fixed z-50 mb-64">

            <div className="flex-1"><img src="/images/logo.png" alt="" className="w-60"/></div>
            <div className=" flex flex-1 justify-center">
                <ul className="flex gap-6">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                icon={link.icon}
                                text={link.text}
                                active={route().current(link.href)}
                                href={route(link.href)}

                            ></NavLink>
                        </li>
                    ))}
                </ul> 
            </div>
            <div className="flex-1 flex justify-end items-end">
                <ul className="flex space-x-4">
                <li><NavLink icon= {<IoSearch  className="text-4xl" />}></NavLink></li>
                <li><NavLink icon= {<IoCart className="text-4xl" />}></NavLink></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;