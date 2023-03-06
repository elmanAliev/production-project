import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string,
  value?: Country,
  onChange?: (value: Country) => void,
  readonly?: boolean,
}

const options = [
    { value: Country.AZ, content: Country.AZ },
    { value: Country.KZ, content: Country.KZ },
    { value: Country.RUS, content: Country.RUS },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const handleChange = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames("", {}, [className])}
            label="Укажите страну"
            options={options}
            value={value}
            onChange={handleChange}
            readonly={readonly}
        />
    );
});
