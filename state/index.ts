import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "./themeMode.slice";
import InputFieldSliceReducer from "./inputField.slice";

export const store = configureStore({
  reducer: {
    themeMode: themeModeReducer,
    inputValue: InputFieldSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export * from "./themeMode.slice";
export * from "./inputField.slice";
