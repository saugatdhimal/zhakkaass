import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FaShoppingBag, FaRegHeart} from 'react-icons/fa';
import {BsPerson} from 'react-icons/bs';

import styles from './styles.module.scss';

function Header() {
    const router = useRouter();
    function activeRoute(routeName) {
        if (router.asPath.includes(routeName)) {
            return `${styles.active}`;
        } else {
            return '';
        }
    }
    return (
        <header className={styles.container}>
            <nav>
                <div className={styles.nav}>
                    <div>
                        <Link href='/'>
                            <a>
                                <Image src='/logo.png' alt='zhakas-logo' width={400} height={50} />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navRight}>
                        <Link href='/shop/men'>
                            <a className={activeRoute('/shop/men')}>MEN</a>
                        </Link>
                        <Link href='/shop/women'>
                            <a className={activeRoute('/shop/women')}>WOMEN</a>
                        </Link>
                        <Link href='/shop/kids'>
                            <a className={activeRoute('/shop/kids')}>KIDS</a>
                        </Link>
                        <Link href='/bag'>
                            <a className={activeRoute('/bag')}>
                                <FaShoppingBag size={20} />
                            </a>
                        </Link>
                        <Link href='/wishlist'>
                            <a className={activeRoute('/wishlist')}>
                                <FaRegHeart size={20} />
                            </a>
                        </Link>
                        <Link href='/profile'>
                            <a className={activeRoute('/profile')}>
                                <BsPerson size={25} />
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
