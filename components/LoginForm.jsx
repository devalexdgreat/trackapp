"use client";
import emailIcon from '@/public/email.png';
import pswdIcon from '@/public/pswd.png';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const account_type = "user";
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await signIn("credentials", {
                email, 
                password,
                account_type, 
                redirect: false,
            });
            
            if(res.error) {
                setError("Invalid Credentials");
                return;
            }
            console.log(res);
            
            router.replace("admin");

        } catch (error) {
            
        }
    }

    return (
        <div className="w-11/12 md:w-11/12 mx-auto flex justify-center items-center ">
                <div className="md:w-4/12 w-full md:border md:border-black p-6 mt-8 mb-44">
                    <div className="text-center pb-6">
                        <h1 className="text-black text-xl md:text-2xl font-medium">Sign in to continue</h1>
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
                            onChange={(e) => setEmail(e.target.value)}
                            type='text' placeholder='Enter your Email Address' 
                            className='w-full login-inp group/item'/>
                            <div className='flex items-center px-2'>
                                <Image src={emailIcon} className="" height={20} width={20} alt='hey'/>
                            </div>
                        </div>
                        <div className='flex justify-between bg-white border-b border-black py-3 px-2'>
                            <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type='password' placeholder='Enter your Password' 
                            className='w-full login-inp'/>
                            <div className='flex items-center px-2'>
                                <Image src={pswdIcon} className="" height={20} width={20} alt='hey'/>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" value="Login" 
                            className='px-14 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold
                            w-full' />
                        </div>
                    </form>
                </div>
            </div>
    );
}