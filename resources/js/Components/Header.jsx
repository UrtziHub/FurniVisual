import { Link } from "@inertiajs/react";
import { IoHome, IoImage, IoInformationCircleSharp, IoSearch, IoCart  } from "react-icons/io5";

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
];

const Header = () => {
    return (
        <header className="bg-gray-300 flex justify-around p-4">
            <div><img src="/images/logo.png" alt="" className=""/></div>
            <div>
                <ul className="flex gap-4">
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
            <div>
                <ul className="flex space-x-4">
                <li><NavLink icon= {<IoSearch  className="text-4xl" />} text = {"search"}></NavLink></li>
                <li><NavLink icon= {<IoCart className="text-4xl" />} text = {"cart"}></NavLink></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;