import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
  className?: string,
  label?: string,
  options?: SelectOption[],
  value?: string,
  onChange?: (value: string) => void,
  readonly?: boolean
}

const Select = ({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps) => {
    const mods: Mods = {

    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            key={opt.value}
            className={cls.option}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={handleChange}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};

export default memo(Select);
