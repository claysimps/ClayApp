import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "constants/screensEnum";
import { HomeScreen } from "screens";
import { BottomTabsBar } from "components";
import { PortfolioStack } from "./PortfolioStack";
import { InterestsStack } from "./InterestsStack";
import { SettingsStack } from "./SettingsStack";

export type RootStackParamList = {
  [SCREENS.Main]: undefined;
};
export type MainTabsParamList = {
  [SCREENS.HomeScreen]: undefined;
  [SCREENS.PortfolioStack]: undefined;
  [SCREENS.InterestsStack]: undefined;
  [SCREENS.SettingsStack]: undefined;
};

const MainTabs = createBottomTabNavigator<MainTabsParamList>();
const MainStack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <MainStack.Navigator mode="modal">
      <MainStack.Screen
        name={SCREENS.Main}
        options={{
          headerShown: false,
        }}>
        {() => (
          <MainTabs.Navigator
            initialRouteName={SCREENS.HomeScreen}
            tabBar={(props) => <BottomTabsBar {...props} />}>
            <MainTabs.Screen
              options={{ title: "Home" }}
              name={SCREENS.HomeScreen}
              component={HomeScreen}
            />
            <MainTabs.Screen
              options={{ title: "Portfolio" }}
              name={SCREENS.PortfolioStack}
              component={PortfolioStack}
            />
            <MainTabs.Screen
              options={{ title: "Interests" }}
              name={SCREENS.InterestsStack}
              component={InterestsStack}
            />
            <MainTabs.Screen
              options={{ title: "Settings" }}
              name={SCREENS.SettingsStack}
              component={SettingsStack}
            />
          </MainTabs.Navigator>
        )}
      </MainStack.Screen>
    </MainStack.Navigator>
  );
};
