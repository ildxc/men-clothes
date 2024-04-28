"use client"

import { createUser } from "@/functions/users";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage(){
    const [message, setMessage] = useState({
        message: '',
        style: ''
    })
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
        if (user.password !== user.confirmPassword){
            setMessage({message: 'Passwords do not match', style: 'text-red-500'})
            return
        }
        else if (user.password.length < 8){
            setMessage({message: 'Password must be at least 8 characters long', style: 'text-red-500'})
            return
        }
        else if (user.email === '' || user.firstName === '' || user.lastName === ''){
            setMessage({message: 'All fields are required', style: 'text-red-500'})
            return
        }
        else if (/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(user.email) === false){
            setMessage({message: 'Invalid email', style: 'text-red-500'})
            return
        }
        else{
            setMessage({message: '', style: ''})
            createUser(user).then(response => {
                if (response === 'User created successfully'){
                    setMessage({message: response, style: 'text-green-500'})
                }
                else{
                    setMessage({message: response, style: 'text-red-500'})
                }
            
            })
        }
    }

    return (
        <main className="flex items-center justify-center mt-10 mb-20">
            <div className="w-96">
                <h1 className="text-3xl font-bold">Register</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="firstName" className="block mb-2">First Name</label>
                        <input type="firstName" id="firstName" name="firstName" className="w-full p-2 border border-gray-300" onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="block mb-2">Last Name</label>
                        <input type="lastName" id="lastName" name="lastName" className="w-full p-2 border border-gray-300" onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300" onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300" onChange={handleChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full p-2 border border-gray-300" onChange={handleChange}/>
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={handleSubmit}>Register</button>
                    <p className={message.style}>{message.message}</p>
                </form>
                <p>Do you have an account? <Link href='/login' className="text-blue-400 mt-5">Log in</Link></p>
            </div>
        </main>
    );
}