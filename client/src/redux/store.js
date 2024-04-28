import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { storage } from "@/helpers";
import cart from "./features/cart/cartSlice";
import auth from './features/auth/authSlice'
import search from './features/search/searchSlice'

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    cart,
    auth,
    search
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
