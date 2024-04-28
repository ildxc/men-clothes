"use client";

import { selectUser, logout } from "@/redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const user = useSelector(selectUser);
    if (user.email === "") {
        router.back;
    }
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        router.push("/");
    };
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold">
                Hi {user.firstName} {user.lastName}
            </h1>
            <button onClick={handleLogout} className="border border-red-600 py-2 px-5 rounded-md text-red-600 duration-300 hover:bg-red-600 hover:text-white">Log Out</button>
        </div>
    );
}
