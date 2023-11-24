import RegisterForm from '@/components/RegisterForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Login() {
    const session = await getServerSession(authOptions);

    if(session) redirect("/track");

    return(
        <div className="w-full login-wrap flex items-center">
            <RegisterForm />
        </div>
    );
}