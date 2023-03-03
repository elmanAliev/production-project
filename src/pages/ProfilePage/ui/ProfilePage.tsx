import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const redusers: ReducersList = {
    profile: profileReducer,
};

interface NotFoundPageProps {
  className?: string
}

const ProfilePage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                {t("Страница Профиля")}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
