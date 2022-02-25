import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

const ProductCard = () => {
    return (
        <div className={styles.container}>
            <Image src='/product.webp' alt='' width={250} height={250} />
            <p className={styles.mrp}>MRP $100</p>
            <p className={styles.info}>TrackSuit Jacket</p>
            <div className={styles.rating}>
                <p>
                    {Array(5)
                        .fill()
                        .map((_, i) => (
                            <>⭐</>
                        ))}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
