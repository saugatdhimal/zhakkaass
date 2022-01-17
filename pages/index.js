import Button from '../components/Button';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Button primary>Home</Button>
        </div>
    );
}
