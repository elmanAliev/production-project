import { useEffect, useState } from "react";

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const { userAgent } = navigator;
        const mobileRegExp = /Mobile/i;
        setIsMobile(!!userAgent.match(mobileRegExp));
    }, []);

    return isMobile;
};
