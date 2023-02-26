import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { FC } from "react";
import { Provider } from "react-redux";
import { StateSchema } from "../config/stateSchema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
