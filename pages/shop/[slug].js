import {useRouter} from 'next/router';
import Button from 'components/Button';
import styles from './styles.module.scss';

export default function Shop() {
    const router = useRouter();
    const {slug} = router.query;

    return (
        <div className={styles.container}>
            <Button primary>{slug}</Button>
        </div>
    );
}
