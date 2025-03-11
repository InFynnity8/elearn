import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice.ts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "courses",
    storage, // Saves state in localStorage
  };
  
  const persistedReducer = persistReducer(persistConfig, courseReducer);

export const store = configureStore({
  reducer: {
    courses: persistedReducer,
  },
});

export type ReactState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);
