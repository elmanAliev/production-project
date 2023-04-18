import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { useSelector } from "react-redux";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import cls from "./SideBar.module.scss";
import SideBarItem from "../SideBarItem/SideBarItem";

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const SideBarItemList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () => SideBarItemList.map((item) => (
            <SideBarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        )),
        [collapsed, SideBarItemList],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? ">" : "<"}
            </Button>
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
};

export default memo(SideBar);
