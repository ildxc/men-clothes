import Link from "next/link";

export default function RegisterPage(){
    return (
        <main className="flex items-center justify-center mt-20">
            <div className="w-96">
                <h1 className="text-3xl font-bold">Register</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full p-2 border border-gray-300" />
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded w-full">Register</button>
                </form>
                <p>Do you have an account? <Link href='/login' className="text-blue-400 mt-5">Log in</Link></p>
            </div>
        </main>
    );
}