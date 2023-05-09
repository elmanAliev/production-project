import { useTranslation } from "react-i18next";
import { BugButton } from "@/app/providers/ErrorBoundary";
import { RatingCard } from "@/entities/Rating";

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t("Главная страница")}
            <BugButton />
            <RatingCard hasFeedback />
        </div>
    );
};

export default MainPage;
