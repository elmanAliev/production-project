import { memo, Suspense, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "@/app/providers/router/config/routeConfig";
import PageLoader from "@/shared/ui/PageLoader/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { AppRoutesProps } from "@/shared/types/router";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
