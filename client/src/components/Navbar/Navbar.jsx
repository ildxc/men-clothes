"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";
import { selectCart } from "@/redux/features/cart/cartSlice";
import { selectSearch, setSearch } from "@/redux/features/search/searchSlice";

export default function Navbar() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const q = useSelector(selectSearch);
    const cart = useSelector(selectCart)
    const links = [
        { href: "/shoes", text: "Shoes" },
        { href: "/t-shirt", text: "T-shirt" },
        { href: "/pants", text: "Pants" },
        { href: "/coats", text: "Coats" },
        { href: "/underwear", text: "Underwear" },
        { href: "/swimsuits", text: "Swimsuits" },
        { href: "/caps", text: "Caps" },
    ];
    return (
        <nav className={styles.container}>
            <div className={styles.actions}>
                <Link href={"/"} className="font-sans">SHIEN</Link>
                <input type="buscador" placeholder="search" value={q} onChange={(e) => dispatch(setSearch(e.target.value))}/>
                <div className={styles.buttonsContainer}>
                    {user.email === "" ? (
                        <Link href="/login">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
                                />
                            </svg>
                        </Link>
                    ) : (
                        <Link href="/profile" className="flex items-center gap-6">
                            <p className="text-base font-normal">
                                {user.firstName} {user.lastName}
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
                                />
                            </svg>
                        </Link>
                    )}
                    <Link href="/cart" className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M7 22q-.825 0-1.412-.587T5 20q0-.825.588-1.412T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20q0-.825.588-1.412T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"
                            />
                        </svg>
                        <div className="text-sm font-normal bg-red-500 aspect-square w-5 text-white flex justify-center items-center rounded-full absolute bottom-[-10px] right-[-10px]">{cart.length}</div>
                    </Link>
                </div>
            </div>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        {link.text}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
