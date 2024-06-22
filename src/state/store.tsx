"use client"
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";
import sessionStorage from "redux-persist/lib/storage/session";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  timeout: 100,
  key: 'root',
  storage: sessionStorage,
}

export const store = configureStore({
  reducer: {
    posts: persistReducer(persistConfig, postsReducer),
    user: persistReducer(persistConfig, userReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;