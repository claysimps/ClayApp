import React from "react";
import { Text } from "react-native";
import { ScreenLayout } from "components";
const infoText = ` Thanks for checking out ClayApp, THE app for all things Clayton! Have
a look around, I’m sure you’ll agree, that Clayton is an amazing dude;
with energy and drive by the bucket load! 😉`;
export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <ScreenLayout.Header title="Home" />
      <ScreenLayout.Info infoText={infoText} />

      <ScreenLayout.Body>
        <Text>Native Screen</Text>
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
