import { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Modal from "shared/ui/Modal/Modal";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const handleToggleModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={handleToggleModal}
            >
                Войти
            </Button>
            <Modal isOpen={isAuthModal} onClose={handleToggleModal}>
                eeeeeeeeeeeeeefffddddddddddddddddddddddddddddddddddddddddddddddddddd
            </Modal>
        </div>
    );
};
