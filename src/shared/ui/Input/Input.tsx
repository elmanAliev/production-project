import {
    ChangeEvent, InputHTMLAttributes, memo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean
}

const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        autoFocus,
        readonly,
        ...otherProps
    } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            <input
                className={cls.Input}
                type={type}
                value={value}
                onChange={handleChange}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
};

export default memo(Input);
