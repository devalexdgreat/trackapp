"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    // const [openedStyle, setOpenedStyle] = useState(0.95);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="w-full bg-blue-500">
            <div className="w-10/12 md:w-11/12 mx-auto h-20 flex justify-between items-center text-white">
                <Link className="font-medium text-lg dis" href={'/'}>
                <Image src={Logo} alt="" className="h-10 w-10" /></Link>
                
                <div className="hidden gap-8 md:flex items-center">
                    <Link className="bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-slate-100" 
                    href={'/login'}>Login</Link>
                    <Link className="border border-white px-6 py-2 rounded-lg hover:bg-white 
                    hover:text-blue-500" href={'/'}>Track Your Shipment</Link>
                </div>
                
                <div onClick={toggleMenu} className="block md:hidden text-lg font-medium border-b-2 border-white">
                    MENU
                </div>
            </div>
            {open && (
                <div className="w-full bg-blue-500 border-t text-white md:hidden">
                    <div className="w-11/12 gap-3 mx-auto flex py-3">
                        <Link href={"/login"} className="flex text-lg font-medium text-white py-2
                        bg-black px-6 rounded-lg">Login</Link>
                        <Link href={"/"} className="flex text-lg font-medium text-white py-2
                        bg-black px-6 rounded-lg">Track</Link>
                    </div>
                </div>
            )}
        </div>
    );
}