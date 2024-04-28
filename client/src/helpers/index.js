import createWebStorage from "redux-persist/es/storage/createWebStorage";

export const isClient = typeof window !== "undefined";

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

export const storage = isClient
    ? createWebStorage("local")
    : createNoopStorage();