import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select("account_type");
        console.log("user: ", user);
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
    }
}