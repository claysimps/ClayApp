import React from "react";
import { Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyledThemeContainer,
  StyledToggleText,
  StyledSwitchWrapper,
} from "./ThemeModeSwitch.styles";
import { ThemeModeEnum, setThemeMode } from "state";
import { useAppDispatch } from "hooks";
import { StyledBaseText } from "../Text";

export interface ThemeModeProps {}

const { LIGHT, DARK, PINK } = ThemeModeEnum;

export const ThemeModeSwitch = ({
  themeState,
}: {
  themeState: ThemeModeEnum;
}) => {
  const dispatch = useAppDispatch();

  const handleSwitchOnChange = async (value: ThemeModeEnum) => {
    await AsyncStorage.setItem("THEME", value);
  };

  const ThemeSwitchPlaceholder = () => (
    <StyledSwitchWrapper>
      <StyledToggleText>Unicorn mode</StyledToggleText>
      <StyledBaseText size={50}>🦄</StyledBaseText>
    </StyledSwitchWrapper>
  );
  const ThemeSwitch = () => (
    <StyledSwitchWrapper>
      <StyledToggleText>Dark mode</StyledToggleText>
      <Switch
        value={themeState === DARK}
        onValueChange={(value) => {
          dispatch(setThemeMode(value ? DARK : LIGHT));
          handleSwitchOnChange(themeState);
        }}
      />
    </StyledSwitchWrapper>
  );
  return (
    <StyledThemeContainer>
      {themeState === PINK ? <ThemeSwitchPlaceholder /> : <ThemeSwitch />}
    </StyledThemeContainer>
  );
};
