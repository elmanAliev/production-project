import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
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
    const { t } = useTranslation();

    const handleChange = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={handleChange}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
            readonly={readonly}
            direction="top right"
        />
    );
});
