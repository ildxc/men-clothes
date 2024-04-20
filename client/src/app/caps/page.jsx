"use client"
import { useGetClothes } from "@/hooks/useGetClothes";
import Product from "@/components/Product/Product";

export default function CapsPage(){
    const { clothes, loading } = useGetClothes({ type: "caps" });
    return loading ? (
        <p>Loading...</p>
    ) : (
        <main className="grid grid-cols-4 gap-5">
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