import cs from '../cs';
import Ripple from './Ripple';
import styles from './styles.module.scss';

const noop = () => {};

const Button = ({
    className,
    onClick = noop,
    children,
    primary,
    secondary,
    outline,
    disabled = false,
    ...otherProps
}) => {
    return (
        <button
            className={cs(styles.button, className, {
                [styles.outline]: outline,
                [styles.disabled]: disabled,
                [styles.primary]: primary,
                [styles.secondary]: secondary,
            })}
            onClick={onClick}
            {...otherProps}
        >
            {children}
            <Ripple />
        </button>
    );
};

export default Button;
