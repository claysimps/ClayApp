import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "constants/screensEnum";
import { ReactNativeScreen } from "screens";

export type PortfolioStackParamList = {
  [SCREENS.ReactNativePortfolio]: undefined;
};

const Stack = createStackNavigator<PortfolioStackParamList>();

export const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={SCREENS.ReactNativePortfolio}
      options={{ title: "React Native" }}
      component={ReactNativeScreen}
    />
  </Stack.Navigator>
);
