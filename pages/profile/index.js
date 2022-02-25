import Button from 'components/Button';
import styles from './styles.module.scss';

export default function Profile() {
    return (
        <div className={styles.container}>
            <Button primary>Profile</Button>
        </div>
    );
}
