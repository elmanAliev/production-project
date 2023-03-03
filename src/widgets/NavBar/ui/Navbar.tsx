import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/authByUsername";
import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={handleLogout}
                >
                    Выйти
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={handleOpenModal}
            >
                Войти
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={handleCloseModal}
                />
            )}

        </div>
    );
});
