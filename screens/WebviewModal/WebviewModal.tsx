import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import Webview from "react-native-webview";

import { RootStackParamList, MainTabsParamList } from "navigation/RootStack";
import { SCREENS } from "../../constants";
import {
  StyledSafeAreaView,
  StyledGestureRecognizer,
} from "./WebviewModal.styles";

type WebviewModalProp = CompositeNavigationProp<
  StackNavigationProp<MainTabsParamList, SCREENS.InterestsStack>,
  StackNavigationProp<RootStackParamList, SCREENS.WebviewModal>
>;

type WebviewRouteProps = RouteProp<RootStackParamList, SCREENS.WebviewModal>;

export interface WebviewModalProps {
  navigation: WebviewModalProp;
  route: WebviewRouteProps;
}

export const WebviewModal = ({ route, navigation }: WebviewModalProps) => {
  const { bookUrl } = route.params;
  const handleClose = () => {
    navigation.pop();
  };
  const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80,
  };
  return (
    <StyledGestureRecognizer config={config} onSwipeRight={() => handleClose()}>
      <StyledSafeAreaView>
        <Webview source={{ uri: bookUrl }} />
      </StyledSafeAreaView>
    </StyledGestureRecognizer>
  );
};
