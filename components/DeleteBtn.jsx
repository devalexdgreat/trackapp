"use client";

import Image from "next/image";
import delIcon from '@/public/del.png';
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }) {
    const router = useRouter();
    const removeItem = async () => {
        const confirmed = confirm("Are you sure, you want to delete item?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/items?id=${id}`, {
                method: "DELETE",
            });

            if(res.ok) {
                router.refresh();
            }
            
        }
    };

    return (
        <button onClick={removeItem} className="h-12 w-12 rounded-full flex items-center 
        justify-center bg-blue-500 hover:bg-blue-600" title="Delete">
            <Image src={delIcon} alt="delete" className="h-3/6 w-6/12" />
        </button>
    );
}