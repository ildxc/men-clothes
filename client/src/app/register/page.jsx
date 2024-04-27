"use client"

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage(){
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <main className="flex items-center justify-center mt-10">
            <div className="w-96">
                <h1 className="text-3xl font-bold">Register</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="firstName" className="block mb-2">First Name</label>
                        <input type="firstName" id="firstName" name="firstName" className="w-full p-2 border border-gray-300" onClick={handleChange} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="block mb-2">Last Name</label>
                        <input type="lastName" id="lastName" name="lastName" className="w-full p-2 border border-gray-300" onClick={handleChange} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300" onClick={handleChange} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300" onClick={handleChange} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full p-2 border border-gray-300" onClick={handleChange} />
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={handleSubmit}>Register</button>
                </form>
                <p>Do you have an account? <Link href='/login' className="text-blue-400 mt-5">Log in</Link></p>
            </div>
        </main>
    );
}