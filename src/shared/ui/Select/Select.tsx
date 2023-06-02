import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
  className?: string,
  label?: string,
  options?: SelectOption<T>[],
  value?: T,
  onChange?: (value: T) => void,
  readonly?: boolean
}

const Select = <T extends string> ({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps<T>) => {
    const mods: Mods = {

    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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

export default Select;
