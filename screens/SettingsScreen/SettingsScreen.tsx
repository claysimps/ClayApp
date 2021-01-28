import React from "react";
import { ScreenLayout, Divider } from "components";
import { ThemeModeSwitch } from "../../components/ThemeModeSwitch/ThemeModeSwitch";

import { UnicornButtonContainer } from "../../containers/UnicornButtonContainer";

const screenInfo = `Do you believe in magic?
Well, that’s great, you’ll love this... every time you press the button below, a unicorn is born! 🦄`;

const title = "Settings";
export const SettingsScreen = () => {
  return (
    <ScreenLayout>
      <ScreenLayout.Header title={title} />
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <UnicornButtonContainer />
        <ThemeModeSwitch />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
