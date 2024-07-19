import React from 'react';
import NavDropdown from "@/app/components/NavDropdown";
import Link from "next/link";

const NavHeader = () => {
    return (
        <header className="navbar justify-center px-16 bg-white shadow-none overflow-x-clip">
            <div className="w-full max-w-screen-xl justify-between">
                <h1 className="text-xl">
                    LOGO
                </h1>
                <div className="space-x-2">
                    <ul className="menu menu-horizontal px-1">
                        <NavDropdown label="For Sale">
                            <li><a>Commercial</a></li>
                            <li><a>Educational</a></li>
                            <li><a>Leisure/Hospitality</a></li>
                        </NavDropdown>
                        <NavDropdown label="To Rent">
                            <li><a>Commercial</a></li>
                            <li><a>Educational</a></li>
                            <li><a>Leisure/Hospitality</a></li>
                        </NavDropdown>
                        <li>
                            <Link href="/development">New Development</Link>
                        </li>
                        <li>
                            <Link href="/showdays">Showdays</Link>
                        </li>
                        <li>
                            <Link href="/agencies">Agencies</Link>
                        </li>
                        <li>
                            <Link href="/development">Blog</Link>
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>

                <details className="dropdown">
                    <summary className="btn btn-sm btn-outline border-gray-300 rounded-3xl">
                        Login
                        <i className="bi bi-person-circle"/>
                    </summary>
                    <ul className="menu dropdown-content bg-gray-500 rounded-box z-[1] w-32 p-2 shadow text-white">
                        <li><Link href="/signup">Signup</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </details>
            </div>
        </header>
    );
};

export default NavHeader;