"use client";
import emailIcon from '@/public/email.png';
import pswdIcon from '@/public/pswd.png';
import userIcon from '@/public/user.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const account_type = "user";

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary.");
            return;
        }
        console.log(account_type);

        try {

            const resUserExists = await fetch("http://localhost:3000/api/userExists", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists.");
                return;
            }

            const res = await fetch("http://localhost:3000/api/regists", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({name, email, password, account_type}),
            });

            if(res.ok) {
                const form = e.target;
                form.reset();
                router.push("/login");
            } else {
                console.log("User Registration failed!");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <div className="w-11/12 md:w-11/12 mx-auto flex justify-center items-center ">
                <div className="md:w-4/12 w-full md:border md:border-black p-6 mt-8 mb-44">
                    <div className="text-center pb-6">
                        <h1 className="text-black text-xl md:text-2xl font-medium">Create Account</h1>
                    </div>
                    {error && (
                        <div className='bg-red-600 flex items-center justify-center text-white rounded-full
                        w-9/12 mx-auto'>
                            <span>{error}</span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <div className='flex justify-between bg-white border-b border-black py-3 px-2'>
                            <input 
                            onChange={(e) => setName(e.target.value)}
                            type='text' placeholder='Enter Full Name' 
                            className='w-full login-inp group/item'/>
                            <div className='flex items-center px-2'>
                                <Image src={userIcon} className="" height={20} width={20} alt='hey'/>
                            </div>
                        </div>
                        <div className='flex justify-between bg-white border-b border-black py-3 px-2'>
                            <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type='email' placeholder='Enter Email Address' 
                            className='w-full login-inp'/>
                            <div className='flex items-center px-2'>
                                <Image src={emailIcon} className="" height={20} width={20} alt='hey'/>
                            </div>
                        </div>
                        <div className='flex justify-between bg-white border-b border-black py-3 px-2 login-blink'>
                            <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type='password' placeholder='Enter Password' 
                            className='w-full login-inp'/>
                            <div className='flex items-center px-2'>
                                <Image src={pswdIcon} className="" height={20} width={20} alt='hey'/>
                            </div>
                        </div>
                        <div className='w-full items-center flex justify-center gap-1'>
                            <span>Already have an account ?</span>
                            <Link href={"/login"} className='hover:text-green-500 underline'>Log in</Link>
                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" value="Register" 
                            className='px-14 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold
                            w-full' />
                        </div>
                    </form>
                </div>
            </div>
    );
}