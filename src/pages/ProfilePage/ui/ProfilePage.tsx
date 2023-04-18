import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const redusers: ReducersList = {
    profile: profileReducer,
};

interface NotFoundPageProps {
  className?: string
}

const ProfilePage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateError);
    const { id } = useParams<{id: string}>();

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
        [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
    };

    const handleChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    }, [dispatch]);

    const handleChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const handleChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) }));
    }, [dispatch]);

    const handleChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const handleChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const handleChangeCurrecy = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const handleChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <Page className={classNames("", {}, [className])}>
                <VStack gap="16" max>
                    <ProfilePageHeader />
                    {!!validateErrors?.length && validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                        />
                    ))}
                    <ProfileCard
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        onChangeFirstname={handleChangeFirstname}
                        onChangeLastname={handleChangeLastname}
                        onChangeAge={handleChangeAge}
                        onChangeCity={handleChangeCity}
                        onChangeAvatar={handleChangeAvatar}
                        onChangeUsername={handleChangeUsername}
                        onChangeCurrency={handleChangeCurrecy}
                        onChangeCoutry={handleChangeCountry}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
