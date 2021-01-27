import React, { FC } from "react";
import { Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyledThemeContainer,
  StyledToggleText,
  StyledSwitchWrapper,
} from "./ThemeModeSwitch.styles";
import { ThemeModeEnum, setThemeMode } from "../../state/themeMode.slice";
import { getThemeMode } from "../../selectors/getThemeMode";
import { useSelector } from "react-redux";
import { useAppDispatch } from "hooks";

export interface CalculatorProps {}

const { LIGHT, DARK } = ThemeModeEnum;

export const ThemeModeSwitch: FC<CalculatorProps> = () => {
  const { themeMode } = useSelector(getThemeMode);
  const dispatch = useAppDispatch();

  // const handlePickerOnChange = async (value: ThemeModeEnum) => {
  //   await AsyncStorage.setItem("THEME", value);
  //   dispatch(setThemeMode(value));
  // };

  const handleSwitchOnChange = async (value: ThemeModeEnum) => {
    await AsyncStorage.setItem("THEME", value);
  };

  // const ThemeButtons = () => (
  //   <StyledPickerWrapper>
  //     <Picker
  //       style={{ height: 50, width: 150 }}
  //       selectedValue={themeMode}
  //       onValueChange={handlePickerOnChange}>
  //       <Picker.Item label="Light Mode" value={LIGHT} />
  //       <Picker.Item label="Dark Mode" value={DARK} />
  //       <Picker.Item label="Pink Mode" value={PINK} />
  //     </Picker>
  //   </StyledPickerWrapper>
  // );
  const ThemeSwitch = () => (
    <StyledSwitchWrapper>
      <StyledToggleText>Dark mode</StyledToggleText>
      <Switch
        value={themeMode === DARK}
        onValueChange={(value) => {
          dispatch(setThemeMode(value ? DARK : LIGHT));
          handleSwitchOnChange(themeMode);
        }}
      />
    </StyledSwitchWrapper>
  );
  return (
    <StyledThemeContainer>
      <ThemeSwitch />
      {/* {themeMode === PINK ? <ThemePicker /> : <ThemeSwitch />} */}
    </StyledThemeContainer>
  );
};
