import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

const Avatar = ({ className, src, size }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
            src={src}
            alt="Аватар"
        />
    );
};

export default Avatar;
