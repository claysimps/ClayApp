import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "constants/screensEnum";
import { HomeScreen, BookSuggestionModal } from "screens";
import { BottomTabsBar } from "components";
import { PortfolioStack } from "./PortfolioStack";
import { InterestsStack } from "./InterestsStack";
import { SettingsStack } from "./SettingsStack";

export type RootStackParamList = {
  [SCREENS.Main]: undefined;
  [SCREENS.BookSuggestionModal]: undefined;
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
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "transparent" },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          // overlayStyle: {
          //   opacity: progress.interpolate({
          //     inputRange: [0, 0.8],
          //     outputRange: [0, 0.8],
          //     extrapolate: "clamp",
          //   }),
          // },
        }),
      }}
      mode="modal">
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
      <MainStack.Screen
        name={SCREENS.BookSuggestionModal}
        component={BookSuggestionModal}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};
