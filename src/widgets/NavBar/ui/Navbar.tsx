import { LoginModal } from "features/authByUsername";
import { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={handleOpenModal}
            >
                Войти
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={handleCloseModal}
            />
        </div>
    );
};
