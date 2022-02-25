import Image from 'next/image';
import Button from 'components/Button';
import styles from 'styles/Home.module.scss';
import ProductCard from 'components/Card';
import InfoCard from 'components/InfoCard';

export default function Home() {
    return (
        <div>
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
            <div className={styles.products}>
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>
        </div>
    );
}
