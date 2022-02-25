import React from 'react';
import {RiExchangeFundsFill} from 'react-icons/ri';

import styles from './styles.module.scss';

const ProductCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <RiExchangeFundsFill size={100} />
            </div>
            <p className={styles.info}>Easy Return Policy</p>
        </div>
    );
};

export default ProductCard;
