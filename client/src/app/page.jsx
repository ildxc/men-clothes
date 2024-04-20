"use client";

import { getClothes } from "@/functions/clothes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Product from "@/components/Product/Product";

export default function Home() {
    const [clothes, setClothes] = useState([]);
	
    useEffect(() => {
        getClothes(setClothes);
    }, []);

    return (
        <main>
            <div className="px-5 md:px-20">
                {clothes.map((item) => (
                    <Product
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        image={item.colors[0].image}
						id={item._id}
                    />
                ))}
            </div>
        </main>
    );
}
