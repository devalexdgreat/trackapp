"use client";
import { useState } from "react";
import Link from "next/link";
import TrackInfo from "./TrackInfo";
import ErrorBox from "./ErrorBox";

export default function TrackCard() {

    const [searchVar, setSearchVar] = useState("");
    const [foundId, setFoundId] = useState({});
    const [newErr, setNewErr] = useState("");
    const [showItem, setShowItem] = useState("none");
    const [showErrItem, setShowErrItem] = useState("none");
    
    const findItemById = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/items', {
                cache: 'no-store',
            });
    
            if(!res.ok) {
                throw new Error("Failed to fetch items");
            }
            console.log(res);
            console.log(searchVar);
            const { items } = await res.json();
            console.log(items);

            if(searchVar === "" || searchVar.length < 9) {
                console.log("Empty or Invalid Tracking ID");
                setNewErr("Empty or Invalid Tracking ID");
                setShowErrItem("flex");
                setShowItem('none');
                return;
            }

            const found = items.find(obj => {
                return obj.tracking_id == searchVar;
            });
            if (found) {
                setShowErrItem('none');
                setFoundId(found);
                setShowItem('block');
                console.log(found);
                console.log(foundId);
            } else {
                console.log("error");
            }
            
            // return res.json();
            

        } catch (error) {
            console.log("Error loading items: ", error);
        }
    }

    return(
        <div className="w-full">
                <div className="w-6/12 mx-auto text-center my-12">
                    <h1 className="text-2xl md:text-4xl">Track & Trace</h1>
                </div>

                <div className="w-full bg-blue-200 py-12">
                    <div className="w-11/12 md:w-10/12 mx-auto overflow-hidden">
                        <div className="w-full bg-white md:w-6/12 mx-auto flex justify-between rounded-lg p-1 
                        border border-black h-14">
                            <input 
                            onChange={(e) => setSearchVar(e.target.value)}
                            value={searchVar}
                            type="text" placeholder="Enter your tracking number(s)" 
                            className="w-full ps-3 track-inp"/>
                            <button type="submit" onClick={findItemById} className="py-2 px-8 
                            bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                            font-medium md:font-bold">Track</button>
                        </div>
                        <div className="mt-12 mb-44">
                            <div className="flex flex-col w-11/12 md:w-6/12 mx-auto">
                                <ErrorBox errData={newErr} displayData={showErrItem}/>
                                <TrackInfo data={foundId} displayData={showItem}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}