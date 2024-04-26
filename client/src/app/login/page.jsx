import Link from "next/link";


export default function LoginPage(){
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="w-96">
                <h1 className="text-3xl font-semibold mb-5">Login</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-md"
                    >
                        Login
                    </button>
                </form>
                <p>Dont you have an account? <Link href='/register' className="text-blue-400 mt-5">Register</Link></p>
            </div>
        </div>
    );
}