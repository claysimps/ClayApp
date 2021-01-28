import React from "react";
import { UnicornButton } from "components";
import { ThemeModeEnum, setThemeMode } from "state";
import { useAppDispatch } from "hooks";
import AsyncStorage from "@react-native-community/async-storage";
import { getThemeMode } from "selectors";
import { useSelector } from "react-redux";
import { StyledUnicornButtonText } from "./UnicornButtonContainer.styles";

const { LIGHT, DARK, PINK } = ThemeModeEnum;

export const UnicornButtonContainer = () => {
  const { themeMode } = useSelector(getThemeMode);
  const dispatch = useAppDispatch();

  const buttonDisplay = themeMode === PINK ? "Theme settings" : "🦄";
  const emoji = themeMode === PINK ? false : true;
  const setPinkTheme = async () => {
    await AsyncStorage.setItem("THEME", PINK);
    dispatch(setThemeMode(PINK));
  };
  const handleThemeOnChange = async () => {
    if (themeMode === DARK || LIGHT) {
      await setPinkTheme();
    }
  };
  return (
    <UnicornButton onPress={handleThemeOnChange}>
      <StyledUnicornButtonText emoji={emoji}>
        {buttonDisplay}
      </StyledUnicornButtonText>
    </UnicornButton>
  );
};
