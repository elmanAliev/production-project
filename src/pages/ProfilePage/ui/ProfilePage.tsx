import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/Text/Text';

interface NotFoundPageProps {
  className?: string
}

const ProfilePage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation("profile");
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames("", {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
