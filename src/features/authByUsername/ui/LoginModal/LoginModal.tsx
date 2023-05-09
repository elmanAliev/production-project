import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Loader from '@/shared/ui/Loader/Loader';
import Modal from '@/shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ className, isOpen, onClose: handleClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={handleClose}
        className={classNames(cls.LoginModal, {}, [className])}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={handleClose} />
        </Suspense>
    </Modal>
);

export default LoginModal;
