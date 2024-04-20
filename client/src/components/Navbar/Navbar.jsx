"use client";

import Link from "next/link";
import styles from "./styles.module.css";

export default function Navbar() {
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
                <Link href={"/"}>SHIEN</Link>
                <input type="buscador" placeholder="search"/>
                <div className={styles.buttonsContainer}>
                    <button type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="curentColor"
                                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                            />
                        </svg>
                    </button>
                    <button type="button">
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
                    </button>
                    <button type="button">
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
                    </button>
                    <button type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66m-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36"
                            />
                        </svg>
                    </button>
                    <button type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M3.055 11a9.009 9.009 0 0 1 6.277-7.598A16.906 16.906 0 0 0 7.029 11zm7.937-9.954C5.39 1.554 1 6.265 1 12s4.39 10.446 9.992 10.955l.008.01l.425.02A12.476 12.476 0 0 0 12 23a11.285 11.285 0 0 0 .575-.015l.425-.02l.008-.01C18.61 22.444 23 17.735 23 12S18.61 1.554 13.008 1.046L13 1.036l-.426-.021a11.162 11.162 0 0 0-1.148 0l-.426.02zM12.002 3a14.918 14.918 0 0 1 2.965 8H9.033a14.918 14.918 0 0 1 2.966-8H12zM7.028 13c.16 2.76.98 5.345 2.303 7.598A9.009 9.009 0 0 1 3.055 13zm4.97 8a14.918 14.918 0 0 1-2.966-8h5.934A14.918 14.918 0 0 1 12 21zm2.67-.402A16.907 16.907 0 0 0 16.97 13h3.974a9.009 9.009 0 0 1-6.276 7.598M16.97 11c-.16-2.76-.98-5.345-2.303-7.598A9.009 9.009 0 0 1 20.945 11z"
                            />
                        </svg>
                    </button>
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
