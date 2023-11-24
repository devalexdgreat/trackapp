import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongoDBt from "@/libs/mongodbt";

export async function POST(req) {
        const {name, email, password, account_type} = await req.json();

        console.log("name: ", name);
        console.log("email: ", email);
        console.log("password: ", password);
        console.log("type: ", account_type);

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        await connectMongoDB();
        await User.create({name, email, password: hashedPassword, account_type});

        return NextResponse.json({ message: "User Registered." }, { status: 201 });
}