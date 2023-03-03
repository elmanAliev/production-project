import { memo } from "react";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBarItem.module.scss";
import { SideBarItemType } from "../../model/items";

interface SideBarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

const SideBarItem = ({ item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};

export default memo(SideBarItem);
