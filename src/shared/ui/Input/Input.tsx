import {
    ChangeEvent, InputHTMLAttributes, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean
}

const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        autoFocus,
        ...otherProps
    } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <input
                className={cls.Input}
                type={type}
                value={value}
                onChange={handleChange}
                {...otherProps}
            />
        </div>
    );
};

export default memo(Input);
