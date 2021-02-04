import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "constants/screensEnum";
import { HomeScreen, BookSuggestionModal, WebviewModal } from "screens";
import { BottomTabsBar } from "components";
import { PortfolioStack } from "./PortfolioStack";
import { InterestsStack } from "./InterestsStack";
import { SettingsStack } from "./SettingsStack";

export type RootStackNavigationProp = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export type RootStackParamList = {
  [SCREENS.Main]: undefined;
  [SCREENS.BookSuggestionModal]: undefined;
  [SCREENS.WebviewModal]: {
    url: string | undefined;
    screenTitle: string;
  };
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
      <MainStack.Screen
        name={SCREENS.WebviewModal}
        component={WebviewModal}
        options={({ route }) => ({
          title: route.params.screenTitle,
          headerBackTitle: "back",
        })}
      />
    </MainStack.Navigator>
  );
};
