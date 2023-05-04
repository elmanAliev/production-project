import {
    ReactNode,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import Portal from '../Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
  className?: string
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode
}

const ANIMATION_DELAY = 300;

const Modal = ({
    className, children, isOpen, onClose,
}: ModalProps) => {
    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (!isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
