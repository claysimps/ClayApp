import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "../constants";
import { ReactNativeScreen, ReactScreen, BackendScreen } from "screens";
import { TopTabsBar } from "components";

export type PortfolioStackParamList = {
  [SCREENS.PortfolioStack]: undefined;
};
export type PortfolioTabsParamList = {
  [SCREENS.ReactNativePortfolio]: undefined;
  [SCREENS.ReactPortfolio]: undefined;
  [SCREENS.BackendPortfolio]: undefined;
};

const PortfolioTopTabs = createMaterialTopTabNavigator<PortfolioTabsParamList>();
const Stack = createStackNavigator<PortfolioStackParamList>();

export const PortfolioStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.PortfolioStack}>
      {() => (
        <PortfolioTopTabs.Navigator
          tabBar={(props) => <TopTabsBar hasThreeButtons {...props} />}
          initialRouteName={SCREENS.ReactNativePortfolio}>
          <PortfolioTopTabs.Screen
            options={{ title: "React Native" }}
            name={SCREENS.ReactNativePortfolio}
            component={ReactNativeScreen}
          />
          <PortfolioTopTabs.Screen
            options={{ title: "React" }}
            name={SCREENS.ReactPortfolio}
            component={ReactScreen}
          />
          <PortfolioTopTabs.Screen
            options={{ title: "Backend" }}
            name={SCREENS.BackendPortfolio}
            component={BackendScreen}
          />
        </PortfolioTopTabs.Navigator>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
