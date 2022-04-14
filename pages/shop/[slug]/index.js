import {useRouter} from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import ProductCard from 'components/Card';

import styles from './styles.module.scss';

export default function Shop() {
    const router = useRouter();
    const {slug} = router.query;

    return (
        <div>
            <Head>
                <title>Zhakkaass</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div className={styles.container}>
                <div className={styles.rightContainer}>
                    <div className={styles.contentContainer}>
                        <p className={styles.title}>Zhakkaass Shop</p>
                        <Link href={`/shop/${slug}/shirt`}>
                            <a className={styles.link}>Shirt</a>
                        </Link>
                        <Link href={`/shop/${slug}/t-shirt`}>
                            <a className={styles.link}>T-Shirt</a>
                        </Link>
                        <Link href={`/shop/${slug}/pants`}>
                            <a className={styles.link}>Pants</a>
                        </Link>
                        <Link href={`/shop/${slug}/jackets`}>
                            <a className={styles.link}>Jackets</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.leftContainer}>
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
        </div>
    );
}
