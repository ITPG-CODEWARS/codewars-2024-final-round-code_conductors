import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full h-fit bg-blue-500 flex justify-between items-center navbar">
            <div className="navbar-start">
                <div className="dropdown text-white">
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
                        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a>Билети</a>
                            <ul className="p-1">
                                <li><a>Купи</a></li>
                                <li><a>Мои</a></li>
                            </ul>
                        </li>
                        <li><a>Разсписание</a></li>
                    </ul>
                </div>
            </div>
            <div className="w-full">
            <Link href="/">
                    <p className="btn btn-ghost text-center text-xl text-white">Точен Влак</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 text-black">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            {/* Image */}
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Профил
                        </a>
                    </li>
                    <li><a>Настройки</a></li>
                    <li><a>Излез</a></li>
                </ul>
            </div>
        </div>
    );
}
