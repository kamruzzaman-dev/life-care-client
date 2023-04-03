import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import themeReducer from "../Services/themeSlice";
import { userApi } from "../Services/userApi";
import { StoreDataApi } from "../Services/StoreDataApi";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [userApi.reducerPath]: userApi.reducer,
    [StoreDataApi.reducerPath]: StoreDataApi.reducer,
    /** here will be more reducer */
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      StoreDataApi.middleware,
    ]),
  /** here will be more reducer */
});

setupListeners(store.dispatch);
