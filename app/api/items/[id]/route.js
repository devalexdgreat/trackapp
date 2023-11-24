import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;

    const { newTracking_id: tracking_id, newShipped_date: shipped_date, newName: name,
    newDescription: description, newFrom_address: from_address, newTo_address: to_address,
    newDelivered_status: delivered_status } = await request.json();

    await connectMongoDB();

    await Item.findByIdAndUpdate(id, { tracking_id, shipped_date, name, description, 
        from_address, to_address, delivered_status });

    return NextResponse.json({ message: "Item Info Updated!" }, { status: 200 });
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const item = await Item.findOne({_id: id});
    return NextResponse.json({ item }, { status: 200 });
}