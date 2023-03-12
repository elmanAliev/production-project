import { memo } from "react";
import { useTranslation } from "react-i18next";

const ArticleDetailsPage = () => {
    const { t } = useTranslation("profile");

    return <div>{t("Детали")}</div>;
};

export default memo(ArticleDetailsPage);
