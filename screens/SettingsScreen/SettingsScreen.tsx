import React from "react";
import { useSelector } from "react-redux";
import { getThemeMode } from "selectors";

import { ScreenLayout, Divider, ThemeModeSwitch } from "components";
import { UnicornButtonContainer } from "containers";

const screenInfo = `Do you believe in magic?
Well, that’s great, you’ll love this... every time you press the button below, a unicorn is born! 🦄`;

const title = "Settings";
export const SettingsScreen = () => {
  const { themeMode } = useSelector(getThemeMode);
  return (
    <ScreenLayout>
      <ScreenLayout.Header title={title} />
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <UnicornButtonContainer themeState={themeMode} />
        <ThemeModeSwitch themeState={themeMode} />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
