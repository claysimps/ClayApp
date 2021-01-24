import { Animated, Pressable } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";
import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ThemeProps,
  TypographyProps,
  neuDepth,
  NeuDepthProps,
  Layout,
} from "../../constants";

export interface StyledTopTabsBarProps
  extends TypographyProps,
    NeuDepthProps,
    ThemeProps {
  bulb?: boolean;
}

const tabBarHeight = Layout.tabBar.height * 0.75;
const tabBarWidth = Layout.tabBar.width;
const twoButtons = Layout.tabBar.width / 2;
const threeButtons = Layout.tabBar.width / 3;
const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);
const AnimatedText = Animated.Text;

const buttonShape = css`
  shadow-offset: 0px 0px;
`;

export const StyledTopTabContainer = styled(
  SafeAreaView,
)<StyledTopTabsBarProps>`
  flex-direction: row;
  align-items: center;
  width: ${tabBarWidth}px;
  background: ${(props) => props.theme.background};
`;

export const StyledTopTabWrapper = styled.View<StyledTopTabsBarProps>`
  background: ${(props) => props.theme.background};
`;
export const StyledPressable = styled(Pressable)<StyledTopTabsBarProps>``;

export const StyledNeuShadow = styled(AnimatedNeomorph)<StyledTopTabsBarProps>`
  height: ${tabBarHeight}px;
  width: ${[twoButtons]}px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "normal"]};
  shadow-offset: -6px -6px;
  ${(props) => props.bulb && buttonShape}
`;

export const StyledTextWrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

export const StyledTabText = styled(AnimatedText)`
  text-align: center;
  color: ${(props) => props.theme.primary};
`;
