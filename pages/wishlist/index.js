import Button from 'components/Button';
import styles from './styles.module.scss';

export default function Wishlist() {
    return (
        <div className={styles.container}>
            <Button primary>wishlist</Button>
        </div>
    );
}
