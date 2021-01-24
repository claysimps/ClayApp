import React from "react";
import { Text } from "react-native";
import { ScreenLayout } from "components";

export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <ScreenLayout.Header title="Home" />
      <ScreenLayout.Info>
        <Text>Native Screen</Text>
      </ScreenLayout.Info>
      <ScreenLayout.Body>
        <Text>Native Screen</Text>
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
