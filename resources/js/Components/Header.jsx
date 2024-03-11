import {
    IoHome,
    IoImage,
    IoInformationCircleSharp,
    IoSearch,
    IoCart,
    IoLogIn,
} from "react-icons/io5";

import NavLink from "./NavLink";
import Dropdown from "./Dropdown";

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
    return (
        <>
            <header className="bg-gray-100 w-screen flex justify-evenly items-center py-2 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 border-b border-gray-200 fixed top-0 z-50">
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
                    {user ? (
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="px-4 py-2 text-xl font-bold hover:bg-gray-400 bg-gray-300 rounded-full transition ease-in-out duration-150"
                                                >
                                                    {user.name.charAt(0)}

                                                    
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                            >
                                                Cart
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
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
                                <NavLink 
                                icon={<IoLogIn className="text-4xl" />} 
                                href={route('login')}></NavLink>
                            </li>
                        )}
                        </ul>
                </div>
                <div className="flex md:hidden text-4xl">
                ≡
                </div>
            </header>
            {/* SEPARATION !!! */}
            <div className="mt-28"></div>
        </>
    );
};

export default Header;
