"use client";
import Logo from "@/public/logo.png";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

export default function AdminNav() {
    const { data: session } = useSession();

    const [open, setOpen] = useState(false);
    // const [openedStyle, setOpenedStyle] = useState(0.95);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="w-full bg-blue-500">
            <div className="w-10/12 md:w-11/12 mx-auto h-20 flex justify-between items-center text-white">
                <Link className="font-medium text-lg dis" href={'/'}>
                    <Image src={Logo} alt="" className="h-10 w-10" />
                </Link>
                <div className="justify-between py-3 gap-8 md:flex items-center hidden">
                    <div className="flex gap-3">
                        <button onClick={() => signOut()} className="bg-black hover:bg-slate-900 text-white py-2 px-6
                        rounded-lg">Log out</button>
                        <Link href={"/admin"} className="bg-black hover:bg-slate-900 text-white py-2 px-6
                        rounded-lg">Back to Admin</Link>
                    </div>
                    <div className="rounded-full bg-white hover:bg-slate-200 h-12 w-12 
                        flex items-center justify-center text-black">
                        <span className="font-medium text-2xl text-center flex items-center
                        justify-center uppercase">{session?.user?.name.charAt(0)}</span>
                    </div>
                </div>
                <div onClick={toggleMenu} className="block md:hidden text-lg font-medium border-b-2 border-white">
                    MENU
                </div>
            </div>
            {open && (
                <div className="w-full bg-blue-500 border-t text-white md:hidden">
                    <div className="w-full mx-auto flex">
                    <div className="w-11/12 mx-auto justify-between py-3 gap-8 flex items-center">
                        <div className="flex gap-3">
                            <button onClick={() => signOut()} className="bg-black hover:bg-slate-900 text-white py-2 px-6
                            rounded-lg">Log out</button>
                            <Link href={"/admin"} className="bg-black hover:bg-slate-900 text-white py-2 px-6
                            rounded-lg">Back to Admin</Link>
                        </div>
                        <div className="rounded-full bg-white hover:bg-slate-200 h-12 w-12 
                            flex items-center justify-center text-black">
                            <span className="font-medium text-2xl text-center flex items-center
                            justify-center uppercase">{session?.user?.name.charAt(0)}</span>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}