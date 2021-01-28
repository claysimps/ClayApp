import React from "react";
import { UnicornButton } from "components";
import { ThemeModeEnum, setThemeMode } from "state";
import { useAppDispatch, useColorScheme } from "hooks";
import AsyncStorage from "@react-native-community/async-storage";
import { StyledUnicornButtonText } from "./UnicornButtonContainer.styles";

const { PINK } = ThemeModeEnum;

export const UnicornButtonContainer = ({
  themeState,
}: {
  themeState: ThemeModeEnum;
}) => {
  const deviceTheme = useColorScheme();
  const dispatch = useAppDispatch();

  const buttonDisplay = themeState === PINK ? "Turn off Unicorn mode" : "🦄";
  const emoji = themeState === PINK ? false : true;

  const setPinkTheme = async () => {
    await AsyncStorage.setItem("THEME", PINK);
    dispatch(setThemeMode(PINK));
  };

  const restoreThemeSettings = async () => {
    await AsyncStorage.setItem("THEME", deviceTheme as ThemeModeEnum);
    dispatch(setThemeMode(deviceTheme as ThemeModeEnum));
  };
  const handleThemeOnChange = async () => {
    themeState === PINK ? restoreThemeSettings() : await setPinkTheme();
  };
  return (
    <UnicornButton onPress={handleThemeOnChange}>
      <StyledUnicornButtonText emoji={emoji}>
        {buttonDisplay}
      </StyledUnicornButtonText>
    </UnicornButton>
  );
};
