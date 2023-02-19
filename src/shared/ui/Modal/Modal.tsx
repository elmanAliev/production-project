import { useTheme } from 'app/providers/ThemeProvider';
import {
    FC, MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string
  isOpen: boolean;
  onClose?: () => void
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true,
    };

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;