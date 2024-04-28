"use client";

import { getClothes } from "@/functions/clothes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Product from "@/components/Product/Product";
import { useGetClothes } from "@/hooks/useGetClothes";

export default function Home() {
    const {clothes, loading} = useGetClothes({})

    return (
        <main>
            <div className="px-5 md:px-20 grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
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
