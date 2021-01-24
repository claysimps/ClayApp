import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "constants/screensEnum";
import { HomeScreen } from "screens";
import { BottomTabsBar } from "components";

export type RootStackParamList = {
  [SCREENS.Main]: undefined;
};
export type MainTabsParamList = {
  [SCREENS.HomeScreen]: undefined;
};

const MainTabs = createBottomTabNavigator<MainTabsParamList>();
const MainStack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <MainStack.Navigator>
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
          </MainTabs.Navigator>
        )}
      </MainStack.Screen>
    </MainStack.Navigator>
  );
};
