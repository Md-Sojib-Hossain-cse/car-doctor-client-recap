import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { IoBagHandleOutline, IoSearch } from "react-icons/io5";

const Header = () => {

    const navItems = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-red-500 bg-none border border-red-500" : ""
        }>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-red-500 bg-none border border-red-500" : ""
        }>About</NavLink></li>
        <li><NavLink to="/services" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-red-500 bg-none border border-red-500" : ""
        }>Services</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-red-500 bg-none border border-red-500" : ""
        }>Blog</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-red-500 bg-none border border-red-500" : ""
        }>Contact</NavLink></li>
    </>


    return (
        <div className="bg-base-100">
            <div className="max-w-6xl mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl font-bold">
                        <img src={logo} alt="" className="w-16" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-2 md:gap-4">
                    <div className="flex gap-2 md:gap-4 items-center">
                        <IoBagHandleOutline className="text-xl" />
                        <IoSearch className="text-xl" />
                    </div>
                    <button className="btn btn-outline btn-error">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Header;