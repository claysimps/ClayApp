import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import AsyncStorage from "@react-native-community/async-storage";

import { ThemeModeEnum, setThemeMode } from "state";
import { getThemeMode } from "selectors";
import { useAppDispatch } from "hooks";
import { dark, light, red } from "../../constants";

const { DARK, LIGHT, RED } = ThemeModeEnum;

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
    if (themeMode === RED) {
      return red.theme;
    }
  };

  useEffect(() => {
    const getThemeAsync = async () => {
      const themeResult = await AsyncStorage.getItem("THEME");
      if (themeResult === RED) {
        dispatch(setThemeMode(themeResult));
      }
    };
    const loadTheme = () => {
      if (themeMode === LIGHT || DARK) {
        dispatch(setThemeMode(themeMode as ThemeModeEnum));
      } else {
        dispatch(setThemeMode(RED));
      }
    };
    getThemeAsync();
    return () => loadTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={providedTheme}>
        <StatusBar
          barStyle={themeMode === DARK ? "light-content" : "dark-content"}
        />

        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
