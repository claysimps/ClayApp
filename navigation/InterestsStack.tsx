import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "../constants";
import { TopTabsBar } from "components";
import { BooksScreen } from "../screens/InterestsScreens";
import { ArticlesScreen } from "../screens/InterestsScreens/ArticlesScreen";

export type InterestsStackParamList = {
  [SCREENS.InterestsStack]: undefined;
};
export type InterestsTabsParamList = {
  [SCREENS.BooksScreen]: undefined;
  [SCREENS.ArticlesScreen]: undefined;
};

const InterestsTopTabs = createMaterialTopTabNavigator<InterestsTabsParamList>();
const Stack = createStackNavigator<InterestsStackParamList>();

export const InterestsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.InterestsStack}>
      {() => (
        <InterestsTopTabs.Navigator
          tabBar={(props) => <TopTabsBar {...props} />}
          initialRouteName={SCREENS.BooksScreen}>
          <InterestsTopTabs.Screen
            options={{ title: "L&D" }}
            name={SCREENS.BooksScreen}
            component={BooksScreen}
          />
          <InterestsTopTabs.Screen
            options={{ title: "Writing" }}
            name={SCREENS.ArticlesScreen}
            component={ArticlesScreen}
          />
        </InterestsTopTabs.Navigator>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
