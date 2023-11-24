import AddNewIdBtn from "@/components/AddNewIdBtn";
import Image from "next/image";
import ItemList from "@/components/ItemList";
import Navbar from "@/components/Navbar";
import AdminNav from "@/components/AdminNav";

export default function AdminPage() {
    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 md:w-11/12 mx-auto">
                <div className="text-center my-9">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pb-52 relative items-grid">
                    <AddNewIdBtn /> 
                    <ItemList />
                </div>
            </div>
        </div>
    );
}