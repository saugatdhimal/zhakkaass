import Button from 'components/Button';
import styles from './styles.module.scss';

export default function Bag() {
    return (
        <div className={styles.container}>
            <Button primary>Bag</Button>
        </div>
    );
}
