import { Suspense, useEffect } from "react";
import { useTheme } from "app/providers/ThemeProvider/";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
