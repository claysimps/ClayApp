import React from "react";
import { ScreenLayout, Divider } from "components";
import WebView from "react-native-webview";

const infoText = ` Thanks for checking out ClayApp, THE app for all things Clayton! Have
a look around, I’m sure you’ll agree, that Clayton is an amazing dude;
with energy and drive by the bucket load! 😉`;
export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <ScreenLayout.Header title="Home" />
      <ScreenLayout.Info infoText={infoText} />
      <ScreenLayout.Body>
        <Divider />
        <WebView
          source={{
            uri:
              "https://github.com/claysimps/reactNativeResponsiveTheme/raw/master/assets/themeExample.gif",
          }}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
