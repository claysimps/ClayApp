import React from "react";
import { Text } from "react-native";
import { ScreenLayout } from "../../../components";

export const ReactNativeScreen = () => {
  return (
    <ScreenLayout>
      <ScreenLayout.Info>
        <Text>Native Screen</Text>
      </ScreenLayout.Info>
      <ScreenLayout.Body>
        <Text>Native Screen</Text>
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
