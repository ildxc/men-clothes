"use client";

import { useSelector, useDispatch } from "react-redux";
import { selectCart, removeFromCart } from "@/redux/features/cart/cartSlice";
import styles from "./styles.module.css";

export default function CartPage() {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
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
                        <button className={styles.removeButton}>
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
                <p className={styles.total}>Total: $ {total}</p>
                <button className={styles.checkoutButton}>Checkout</button>
            </div>
        </div>
    );
}
