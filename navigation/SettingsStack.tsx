import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "constants/screensEnum";
import { SettingsScreen } from "screens";

export type PortfolioStackParamList = {
  [SCREENS.SettingsScreen]: undefined;
};

const Stack = createStackNavigator<PortfolioStackParamList>();

export const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.SettingsScreen} component={SettingsScreen} />
  </Stack.Navigator>
);
