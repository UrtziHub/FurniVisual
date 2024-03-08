import {
    IoHome,
    IoImage,
    IoInformationCircleSharp,
    IoSearch,
    IoCart,
    IoLogIn,
} from "react-icons/io5";

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
        icon: <IoLogIn className="text-4xl" />,
        text: "Login",
        href: "login",
    },
];

const Header = () => {
    return (
        <>
            <header className="bg-gray-100 w-screen flex justify-between items-center py-2 px-10 md:px-32 border-b border-gray-200 fixed top-0 z-50">
                <div className="flex md:hidden text-4xl">
                ≡
                </div>
                <div className="md:flex-1">
                    <div className="w-64">
                    <img src="/images/logo.png" alt="logo" className="" />
                    </div>
                </div>
                <div className="md:flex flex-1 justify-center hidden">
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
                
                <div className="flex-1 xl:flex justify-end items-end hidden">
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                icon={<IoSearch className="text-4xl" />}
                            ></NavLink>
                        </li>
                        <li>
                            <NavLink
                                icon={<IoCart className="text-4xl" />}
                            ></NavLink>
                        </li>
                    </ul>
                </div>
            </header>
            {/* SEPARATION !!! */}
            <div className="mt-28"></div>
        </>
    );
};

export default Header;
