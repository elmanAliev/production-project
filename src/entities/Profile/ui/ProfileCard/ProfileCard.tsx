import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import Avatar from 'shared/ui/Avatar/Avatar';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string,
  data?: Profile
  isLoading?: boolean,
  error?: string,
  readonly?: boolean,
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCoutry?: (value: Country) => void;

}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCoutry,
}: ProfileCardProps) => {
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                className={cls.input}
                value={data?.first}
                placeholder="Ваше имя"
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder="Ваше фамилия"
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.age}
                placeholder="Ваш возраст"
                onChange={onChangeAge}
                readonly={readonly}
                type="number"
            />
            <Input
                className={cls.input}
                value={data?.city}
                placeholder="Город"
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.avatar}
                placeholder="Ссылка на аватар"
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.username}
                placeholder="Имя пользователя"
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCoutry}
                readonly={readonly}
            />
        </VStack>
    );
};
