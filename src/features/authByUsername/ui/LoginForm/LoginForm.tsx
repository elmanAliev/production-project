import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleLogin = useCallback(() => {
        dispatch(loginByUsername({ password, username }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Форма авторизации")} />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input
                className={cls.input}
                type="text"
                placeholder={t("Введите логин")}
                onChange={handleChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t("Введите пароль")}
                onChange={handleChangePassword}
                value={password}
            />
            <Button
                onClick={handleLogin}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});

export default LoginForm;
