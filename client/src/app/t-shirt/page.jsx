"use client";
import { useGetClothes } from "@/hooks/useGetClothes";
import Product from "@/components/Product/Product";

export default function TShirtPage() {
    const { clothes, loading } = useGetClothes({ type: "t-shirt" });
    return loading ? (
        <p>Loading...</p>
    ) : (
        <div className="grid grid-cols-4 gap-5">
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
        </div>
    );
}
