import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';

interface NotFoundPageProps {
  className?: string
}

const ProfilePage = ({ className }: NotFoundPageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames("", {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id!} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
