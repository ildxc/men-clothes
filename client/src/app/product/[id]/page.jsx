"use client";
import { useEffect, useState } from "react";
import { getClothesById } from "@/functions/clothes.js";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function ProductPage({ params }) {
    const [product, setProduct] = useState();
    const [image, setImage] = useState(product && product.colors[0]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getClothesById(params.id, setProduct);
    }, []);
    
    useEffect(() => {
        if (product) {
            setImage(product.colors[0]);
        }
    }, [product]);

    const handleAddToCart = (color) => {
        dispatch(addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            color: color,
        
        }));
        toast.success("Product added to cart");
    };

    return (
        <div className="flex items-center justify-center">
            {product && (
                <div className="flex gap-20">
                    <div>
                        {product.colors.map((color) => (
                            <img
                                key={color.name}
                                src={color.image}
                                alt={color.name}
                                onClick={() => setImage(color)}
                                width={60}
                                height={60}
                                className={
                                    image?.image === color.image
                                        ? "border-2 border-black transition-all"
                                        : "opacity-65 transition-all hover:opacity-100 cursor-pointer"
                                }
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-5">
                        <img
                            width={240}
                            height={140}
                            src={image?.image}
                            alt={product.name}
                            className="aspect-[12/16]"
                        />
                        <div className="flex flex-col gap-6">
                            <div className="w-[30rem]">
                                <h1 className="text-xl">{product.name}</h1>
                                <p className="text-xl font-bold">
                                    {product.price}
                                </p>
                            </div>
                            <button
                                onClick={() => handleAddToCart(image)}
                                className="bg-green-500 text-white rounded-md w-fit px-5 py-2 hover:bg-green-600 transition-all"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
}
