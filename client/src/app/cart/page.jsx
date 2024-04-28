"use client";

import { useSelector, useDispatch } from "react-redux";
import { selectCart, removeFromCart } from "@/redux/features/cart/cartSlice";
import styles from "./styles.module.css";
import { ToastContainer, toast } from "react-toastify";
import { selectUser } from "@/redux/features/auth/authSlice";

export default function CartPage() {
    const cart = useSelector(selectCart);
    const user = useSelector(selectUser)
    console.log(cart)
    const dispatch = useDispatch();
    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const handleCheckot = () => {
        if (user.email === ''){
            toast.error('You must be logged in to checkout', {
                position: "bottom-center",
                autoClose: 3000,
            })
        }
        else{
            toast.success('Checkout successful', {
                position: "top-right",
                autoClose: 3000,
            })
        }
    }
    return (
        <div className={styles.container}>
            {cart.map((item) => (
                <div key={item._id} className={styles.cartContainer}>
                    <div className={styles.product}>
                        <div className={styles.imageContainer}>
                            <img src={item.color.image} alt="" />
                        </div>
                        <div className={styles.info}>
                            <p className={styles.name}>
                                {item.name} - {item.color.name} x{" "}
                                {item.quantity}
                            </p>
                            <p className={styles.price}>$ {item.price}</p>
                        </div>
                    </div>
                    <div>
                        <button className={styles.removeButton} onClick={() => dispatch(removeFromCart(item))}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    fill="currentColor"
                                    d="M202.83 197.17a4 4 0 0 1-5.66 5.66L128 133.66l-69.17 69.17a4 4 0 0 1-5.66-5.66L122.34 128L53.17 58.83a4 4 0 0 1 5.66-5.66L128 122.34l69.17-69.17a4 4 0 1 1 5.66 5.66L133.66 128Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
            <div className={styles.checkout}>
                <p className={styles.total}>
                    Total: ${" "}
                    {total.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </p>
                <button className={styles.checkoutButton} onClick={handleCheckot}>Checkout</button>
            </div>
            <ToastContainer />
        </div>
    );
}
