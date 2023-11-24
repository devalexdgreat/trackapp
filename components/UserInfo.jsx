"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {

    const { data: session } = useSession();

    return (
        <div className="flex flex-col items-center justify-center 
        shadow shadow-black w-2/12 mx-auto mt-2 py-3 rounded-lg">
            <div>
                <div>
                    Name: <span>{session?.user?.name}</span>
                </div>
                <div>
                    Email: <span>{session?.user?.email}</span>
                </div>
                <div className="mt-2">
                    <button onClick={() => signOut()} className="bg-green-500 hover:bg-green-600 text-white py-2 px-6
                     rounded-lg">Log out</button>
                </div>
            </div>
        </div>
    );
}