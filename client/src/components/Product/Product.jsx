'use client'

import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

export default function Product({image, name, price, id}) {
    const router = useRouter()

    return (
        <div className={styles.container} onClick={() => router.push(`/product/${id}`)}>
            <img width={150} height={120} src={image} alt={name} className={styles.image} />
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.price}>$ {price}</p>
        </div>
    );
}