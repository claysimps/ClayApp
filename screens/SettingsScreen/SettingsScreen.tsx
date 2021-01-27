import React from "react";
import { ScreenLayout, Divider, UnicornButton } from "components";
import { ThemeModeSwitch } from "../../components/ThemeModeSwitch/ThemeModeSwitch";
import { ThemeModeEnum, setThemeMode } from "state";
import AsyncStorage from "@react-native-community/async-storage";
import { useAppDispatch } from "hooks";
// import { PortfolioContainer } from "containers";

// type ItemProps = { item: ReactScreenDataProps };

const { PINK } = ThemeModeEnum;
const screenInfo = `Do you believe in magic?
Well, that’s great, you’ll love this... every time you press the button below, a unicorn is born! 🦄`;
const title = "Settings";
export const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const handleThemeOnChange = async () => {
    await AsyncStorage.setItem("THEME", PINK);
    dispatch(setThemeMode(PINK));
  };
  return (
    <ScreenLayout>
      <ScreenLayout.Header title={title} />
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <UnicornButton onPress={handleThemeOnChange} />
        <ThemeModeSwitch />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
