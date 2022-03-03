import Image from 'next/image';
import Head from 'next/head';

import Button from 'components/Button';
import ProductCard from 'components/Card';
import InfoCard from 'components/InfoCard';

import styles from 'styles/Home.module.scss';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Zhakkaass</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <p className={styles.heroTitle}>One-Stop Online Shopping In Nepal.</p>
                    <Button primary>See All Products</Button>
                </div>
                <div className={styles.heroImage}>
                    <Image src='/hero.webp' alt='hero' layout='fill' />
                </div>
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Recommended For You</p>
                <div className={styles.products}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Latest Products</p>
                <div className={styles.products}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Popular Products</p>
                <div className={styles.products}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className={styles.infos}>
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>
        </div>
    );
}
