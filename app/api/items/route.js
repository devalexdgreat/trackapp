import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {tracking_id, shipped_date, name, description, 
        from_address, to_address, delivered_status} = await request.json();
    await connectMongoDB();
    await Item.create({tracking_id, shipped_date, name, description, 
        from_address, to_address, delivered_status});
    return NextResponse.json({ message: "Item Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json({ items });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Item.findByIdAndDelete(id);
    return NextResponse.json({ message: "Item Deleted" }, { status: 200 });
}
