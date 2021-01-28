import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import AsyncStorage from "@react-native-community/async-storage";
import { Appearance, AppearanceProvider } from "react-native-appearance";

import { ThemeModeEnum, setThemeMode } from "state";
import { getThemeMode } from "selectors";
import { useAppDispatch } from "hooks";
import { dark, light, pink } from "../../constants";

const { DARK, LIGHT, PINK } = ThemeModeEnum;

export const ThemeManager = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useSelector(getThemeMode);
  const dispatch = useAppDispatch();

  const providedTheme = () => {
    if (themeMode === DARK) {
      return dark.theme;
    }
    if (themeMode === LIGHT) {
      return light.theme;
    }
    if (themeMode === PINK) {
      return pink.theme;
    }
  };

  useEffect(() => {
    const getThemeAsync = async () => {
      const themeResult = await AsyncStorage.getItem("THEME");
      if (themeResult === PINK) {
        dispatch(setThemeMode(themeResult));
      }
    };
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (themeMode === LIGHT || DARK) {
        dispatch(setThemeMode(colorScheme as ThemeModeEnum));
      } else {
        dispatch(setThemeMode(PINK));
      }
    });
    getThemeAsync();
    return () => subscription.remove();
  }, [dispatch, themeMode]);

  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <ThemeProvider theme={providedTheme}>
          <StatusBar
            barStyle={themeMode === DARK ? "light-content" : "dark-content"}
          />
          {children}
        </ThemeProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};
