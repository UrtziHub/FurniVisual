import {
    IoHome,
    IoImage,
    IoInformationCircleSharp,
    IoSearch,
    IoCart,
    IoLogIn,
    IoReorderThreeOutline,
    IoClose,
    IoPerson,
} from "react-icons/io5";

import NavLink from "./NavLink";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import NavLinkHamburger from "./NavLinkHamburger";

const navlinks = [
    {
        icon: <IoHome className="text-4xl" />,
        text: "Home",
        href: "home",
    },
    {
        icon: <IoImage className="text-4xl" />,
        text: "Catalogue",
        href: "catalogue",
    },
    {
        icon: <IoInformationCircleSharp className="text-4xl" />,
        text: "About us",
        href: "about",
    },
];

const Header = ({ user }) => {
    const [openNabBar, SetOpenNabBar] = useState(false);
    return (
        <>
            <header className="bg-white w-full  fixed top-0 z-50">
                <div className="flex justify-between items-center border-b border-gray-200 py-2 px-8 md:px-16 xl:px-32 2xl:px-64 min-h-[92px]">
                    <div className="flex-1 md:me-10">
                        <Link className="w-64" href={route('home')} >
                            <img
                                src="/images/logo.png"
                                alt="logo"
                                width={256}
                                height={75}
                            />
                        </Link>
                    </div>
                    <div className="lg:flex justify-center hidden">
                        <ul className="flex gap-6">
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        className="text-xl font-semibold"
                                        text={link.text}
                                        active={route().current(link.href)}
                                        href={route(link.href)}
                                    ></NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 lg:flex justify-end items-end hidden">
                        <ul className="flex space-x-4 items-center">
                            {user ? (
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline rounded-md">
                                                <button
                                                    type="button"
                                                    className="w-10 h-10 text-xl text-white font-bold hover:outline hover:outline-gray-300 bg-gray-700 rounded-full transition ease-in-out duration-300"
                                                >
                                                    {user.name.charAt(0)}
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("dashboard")}
                                            >
                                                Dashboard
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("category.index")}
                                            >
                                                Categories
                                            </Dropdown.Link>                                            <Dropdown.Link
                                                href={route("admin.product.index")}
                                            >
                                                Products
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            ) : (
                                <li>
                                    <Link
                                        href={route("login")}
                                        className="flex items-center gap-2 text-lg text-gray-500 font-semibold bg-gray-100 rounded-full px-6 py-1 border hover:border-black duration-500 hover:text-black whitespace-nowrap ms-10"                                    >
                                        <IoPerson />
                                        Sing in
                                    </Link>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    icon={
                                        <IoCart className="text-3xl hover:text-black transition-colors duration-300" />
                                    }
                                ></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div
                        onClick={() => {
                            SetOpenNabBar((previousState) => !previousState);
                        }}
                        className={`flex lg:hidden text-4xl transition-transform duration-300 ease-in-out ${
                            openNabBar ? "rotate-180" : ""
                        }`}
                    >
                        <IoReorderThreeOutline
                            className={`hover:bg-gray-200 cursor-pointer rounded transition-colors duration-300 ease-in-out ${
                                !openNabBar ? "inline-flex" : "hidden"
                            }`}
                        />
                        <IoClose
                            className={`hover:bg-gray-200 cursor-pointer rounded transition-colors duration-300 ease-in-out ${
                                !openNabBar ? "hidden" : "inline-flex"
                            }`}
                        />
                    </div>
                </div>
                <div
                    className={` ${
                        openNabBar ? "flex" : "hidden"
                    } flex-col py-2 px-10 border-b-2`}
                >
                    <div className="border-b-2 pb-2 ">
                        <ul className="flex flex-col">
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <NavLinkHamburger
                                        className="text-2xl font-semibold hover:bg-gray-200 px-4 py-2 rounded transition-colors duration-200 ease-in-out"
                                        text={link.text}
                                        active={route().current(link.href)}
                                        href={route(link.href)}
                                    ></NavLinkHamburger>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-2">
                        {user ? (
                            <div className="flex flex-col gap-2">
                                <div>
                                    <span className="flex items-center gap-4 rounded-md">
                                        <button
                                            type="button"
                                            className="w-10 h-10 text-xl text-white font-bold bg-gray-700 rounded-full transition ease-in-out duration-300"
                                        >
                                            {user.name.charAt(0)}
                                        </button>
                                        <div className="flex flex-col">
                                            <h1 className="text-xl font-semibold">
                                                {user.name}
                                            </h1>
                                            <h1 className="text-lg">
                                                {user.email}
                                            </h1>
                                        </div>
                                    </span>
                                </div>
                                <div className="flex flex-col text-xl">
                                    <Link className="px-4 py-2 text-gray-600 text-2xl font-semibold hover:bg-gray-300 rounded transition ease-in-out duration-300">Cart</Link>
                                    <Link
                                        href={route("profile.edit")}
                                        className="px-4 py-2 hover:bg-gray-300 text-gray-600 text-2xl font-semibold rounded transition ease-in-out duration-300"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        href={route("dashboard")}
                                        className="px-4 py-2 hover:bg-gray-300 text-gray-600 text-2xl font-semibold rounded transition ease-in-out duration-300"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        className="px-4 py-2 hover:bg-gray-300 text-gray-600 text-2xl font-semibold rounded transition ease-in-out duration-300"
                                    >
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="flex ">
                                <Link
                                    href={route("login")}
                                    className="flex items-center justify-center gap-2 font-semibold bg-black text-white rounded-full px-6 py-2 text-xl"
                                >
                                    <IoPerson />
                                    Sing in
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {/* SEPARATION !!! */}
            <div className={`${openNabBar ? (user ? "mt-[528px]" : "mt-[320px]") : "mt-[92px]"}`}></div>
        </>
    );
};

export default Header;
