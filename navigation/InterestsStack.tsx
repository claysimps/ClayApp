import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "../constants";
import { ReactScreen } from "screens";
import { TopTabsBar } from "components";
import { BooksScreen } from "../screens/InterestsScreens";

export type InterestsStackParamList = {
  [SCREENS.InterestsStack]: undefined;
};
export type InterestsTabsParamList = {
  [SCREENS.ReactNativePortfolio]: undefined;
  [SCREENS.ReactPortfolio]: undefined;
  [SCREENS.BooksScreen]: undefined;
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
            options={{ title: "L&D" }}
            name={SCREENS.ReactNativePortfolio}
            component={BooksScreen}
          />
          <InterestsTopTabs.Screen
            options={{ title: "Music" }}
            name={SCREENS.ReactPortfolio}
            component={ReactScreen}
          />
        </InterestsTopTabs.Navigator>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
