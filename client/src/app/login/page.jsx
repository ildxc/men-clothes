"use client"

import { login } from "@/functions/auth";
import { selectUser } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


export default function LoginPage(){
    const [error, setError] = useState('')
    const authUser = useSelector(selectUser)
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(user.email, user.password, dispatch).then(response => {
            if (response === 'Invalid credentials' || response === 'An error ocurried'){
                setError(response)
            }
            else {
                setError('')
            }
        })
    }

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
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-md"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </form>
                <p>{error}</p>
                <p>Dont you have an account? <Link href='/register' className="text-blue-400 mt-5">Register</Link></p>
            </div>
        </div>
    );
}