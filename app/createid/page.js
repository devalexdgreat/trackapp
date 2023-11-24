"use client";
import Image from "next/image";
import refIcon from "@/public/ref.png";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/AdminNav";

export default function CreateId() {
    const [tracking_id, SetTracking_id] = useState(0);
    const [shipped_date, SetShipped_date] = useState("");
    const [name, SetName] = useState("");
    const [description, SetDescription] = useState("");
    const [from_address, SetFrom_address] = useState("");
    const [to_address, SetTo_address] = useState("");
    const [delivered_status, SetDelivered_status] = useState("No");

    const router = useRouter();

    const getRandomNumber = () => {
        let min = 10000000000;
        let max = 99999999999;
        SetTracking_id(Math.round(Math.random() * (max - min) + min))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!tracking_id || !shipped_date || !name || !description || !from_address || !to_address ) {
            alert('This fields are required!');
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/items", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ tracking_id, shipped_date, name, description, from_address, to_address,
                delivered_status }),
            });

            if (res.ok) {
                router.push('/admin');
                router.refresh();
            } else {
                throw new Error('Failed to create an Item!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 mx-auto">
                <div className="my-6">
                    <h1 className="text-2xl md:text-2xl font-medium">Create New Id for item</h1>
                </div>
                <div className="pb-48">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Tracking ID:</label>
                                <div className="flex items-center border border-black rounded-lg pe-2">
                                    <input type='text' value={tracking_id} readOnly
                                    className='w-full p-3 rounded-lg new-inp'/>
                                    <div onClick={() => getRandomNumber()} className="h-9 w-10 bg-blue-500 
                                    hover:bg-blue-600 flex items-center 
                                    justify-center rounded-full p-1">
                                        <Image src={refIcon} className="" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Date Shipped:</label>
                                <input 
                                onChange={(e) => SetShipped_date(e.target.value)}
                                value={shipped_date}
                                type='date' placeholder='Enter Date' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-5/12 gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Item Name:</label>
                                <input 
                                onChange={(e) => SetName(e.target.value)}
                                value={name}
                                type='text' placeholder='Enter Item name' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Item Description:</label>
                                <input 
                                onChange={(e) => SetDescription(e.target.value)}
                                value={description}
                                type='text' placeholder='Enter Item description' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className='flex flex-col gap-1'>
                                <label>Address-Shipped From:</label>
                                <input 
                                onChange={(e) => SetTo_address(e.target.value)}
                                value={to_address}
                                type='text' placeholder='Enter address shipped from' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <span className="md:flex items-center justify-center h-full text-center hidden">-</span>
                            <div className='flex flex-col gap-1'>
                                <label>Address-Shipped To:</label>
                                <input 
                                onChange={(e) => SetFrom_address(e.target.value)}
                                value={from_address}
                                type='text' placeholder='Enter Destination address' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <label>Delivered Status</label>
                            <select 
                            onChange={(e) => SetDelivered_status(e.target.value)}
                            value={delivered_status}
                            id="dlStatus">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        
                        <div className='flex'>
                            <input type="submit" value="Create" 
                            className='px-16 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold w-full md:w-2/12' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}