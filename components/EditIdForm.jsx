"use client";

import Image from "next/image";
import refIcon from "@/public/ref.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, tracking_id, shipped_date, name, description, 
    from_address, to_address, delivered_status }) {
    
    const [newTracking_id, SetNewTracking_id] = useState(tracking_id);
    const [newShipped_date, SetNewShipped_date] = useState(shipped_date);
    const [newName, SetNewName] = useState(name);
    const [newDescription, SetNewDescription] = useState(description);
    const [newFrom_address, SetNewFrom_address] = useState(from_address);
    const [newTo_address, SetNewTo_address] = useState(to_address);
    const [newDelivered_status, SetNewDelivered_status] = useState(delivered_status);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/items/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTracking_id, newShipped_date, newName, newDescription, newFrom_address, 
                newTo_address, newDelivered_status })
            });
            
            if (!res.ok) {
                throw new Error("Failed to Update Items");
            }

            router.push('/admin');
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="pb-48">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Tracking ID:</label>
                                <div className="flex items-center border border-black rounded-lg pe-2">
                                    <input type='text' value={newTracking_id} readOnly
                                    className='w-full p-3 rounded-lg new-inp'/>
                                    <div className="h-9 w-10 bg-blue-500 hover:bg-blue-600 flex items-center 
                                    justify-center rounded-full p-1">
                                        <Image src={refIcon} className="" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Date Shipped:</label>
                                <input 
                                onChange={(e) => SetNewShipped_date(e.target.value)}
                                value={newShipped_date}
                                type='date' placeholder='Enter Date' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-5/12 gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Item Name:</label>
                                <input 
                                onChange={(e) => SetNewName(e.target.value)}
                                value={newName}
                                type='text' placeholder='Enter Item name' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Item Description:</label>
                                <input 
                                onChange={(e) => SetNewDescription(e.target.value)}
                                value={newDescription}
                                type='text' placeholder='Enter Item description' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className='flex flex-col gap-1'>
                                <label>Address-Shipped From:</label>
                                <input 
                                onChange={(e) => SetNewFrom_address(e.target.value)}
                                value={newFrom_address}
                                type='text' placeholder='Enter address shipped from' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <span className="md:flex hidden items-center justify-center h-full text-center">-</span>
                            <div className='flex flex-col gap-1'>
                                <label>Address-Shipped To:</label>
                                <input 
                                onChange={(e) => SetNewTo_address(e.target.value)}
                                value={newTo_address}
                                type='text' placeholder='Enter Destination address' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <label>Delivered Status</label>
                            <select 
                            onChange={(e) => SetNewDelivered_status(e.target.value)}
                            value={newDelivered_status}
                            id="dlStatus">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        
                        <div className='flex'>
                            <input type="submit" value="Update" 
                            className='px-16 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold w-full md:w-2/12' />
                        </div>
                    </form>
                </div>
    );
}