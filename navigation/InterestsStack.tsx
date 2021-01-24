import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "../constants";
import { ReactNativeScreen, ReactScreen } from "screens";
import { TopTabsBar } from "components";

export type InterestsStackParamList = {
  [SCREENS.InterestsStack]: undefined;
};
export type InterestsTabsParamList = {
  [SCREENS.ReactNativePortfolio]: undefined;
  [SCREENS.ReactPortfolio]: undefined;
};

const InterestsTopTabs = createMaterialTopTabNavigator<InterestsTabsParamList>();
const Stack = createStackNavigator<InterestsStackParamList>();

export const InterestsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.InterestsStack}>
      {() => (
        <InterestsTopTabs.Navigator
          tabBar={(props) => <TopTabsBar {...props} />}
          initialRouteName={SCREENS.ReactNativePortfolio}>
          <InterestsTopTabs.Screen
            options={{ title: "React Native" }}
            name={SCREENS.ReactNativePortfolio}
            component={ReactNativeScreen}
          />
          <InterestsTopTabs.Screen
            options={{ title: "React" }}
            name={SCREENS.ReactPortfolio}
            component={ReactScreen}
          />
        </InterestsTopTabs.Navigator>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
