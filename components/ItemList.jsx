import Link from "next/link";
import AddNewIdBtn from "./AddNewIdBtn";
import editIcon from '@/public/edit.png';
import Image from "next/image";
import DeleteBtn from "./DeleteBtn";

const getItems = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/items', {
            cache: 'no-store',
        });

        if(!res.ok) {
            throw new Error("Failed to fetch items");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading items: ", error);
    }
}

export default async function ItemList() {

    const { items } = await getItems();

    return(
        <>
            {items.map((t) => (
            <div key={t.id} className="border border-blue-500 rounded-lg p-4 relative 
            hover:bg-slate-100 admin-item group/item">
                <div className="absolute flex md:invisible group-hover/item:visible 
                md:bottom-[40%] md:left-[20%] w-40 gap-2 pt-2 items-center md:flex-row flex-col right-[-13%] top-0
                justify-center spe-opt">
                    <Link href={`/editid/${t._id}`} className="h-12 w-12 rounded-full flex items-center 
                    justify-center bg-blue-500 hover:bg-blue-600" title="Edit"> 
                        <Image src={editIcon} alt="edit" className="h-3/6 w-6/12" />
                    </Link>
                    <DeleteBtn id={t._id} />
                </div>
                <div>
                    <h1 className="font-bold">{t.name}</h1>
                    <h1 className="truncate">Tracking ID: {t.tracking_id}</h1>
                    <h1 className="truncate">Description: {t.description}</h1>
                    <h1 className="truncate">Shipped Date: {t.shipped_date}</h1>
                    <h1 className="truncate">Address (To): {t.to_address}</h1>
                    <h1 className="truncate">Address (From): {t.from_address}</h1>
                    <h1 className="truncate">Delivered Status: {t.delivered_status}</h1>
                </div>
            </div>
            ))}
        </>
    );
}