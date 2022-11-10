import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
    className,
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    small = false,
    large = false,
    disabled = false,
    leftIcon,
    rightIcon,
    rounded,
    children,
    onClick,
    ...passProps
}) {
    const cx = classNames.bind(styles);
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
        [className]: className,
    });
    const props = {
        onClick,
        ...passProps,
    };

    //Remove event listener when disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    let Comp = 'button';
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
