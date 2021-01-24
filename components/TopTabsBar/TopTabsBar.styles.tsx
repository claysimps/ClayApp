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
  typography,
} from "../../constants";

export interface StyledTopTabsBarProps
  extends TypographyProps,
    NeuDepthProps,
    ThemeProps {
  buttonWidth?: string;
  isFocused?: boolean;
  hasThreeButtons?: boolean;
}

const tabBarHeight = Layout.tabBar.height * 0.75;
const tabBarWidth = Layout.tabBar.width;
const twoButtons = Layout.tabBar.width / 2;
const threeButtons = Layout.tabBar.width / 3;
const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);
const AnimatedText = Animated.Text;

const activeButton = css`
  shadow-offset: -6px -6px;
  background: ${(props) => props.theme.tint};
`;
const activeText = css`
  color: ${(props) => props.theme.ctaText};
  font-weight: ${typography.fontWeight.semiBold};
  font-size: 18px;
`;
const thirdWidth = css`
  width: ${threeButtons}px;
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
  width: ${twoButtons}px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "normal"]};
  ${(props) => props.isFocused && activeButton};
  ${(props) => props.hasThreeButtons && thirdWidth};
`;

export const StyledTextWrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

export const StyledTabText = styled(AnimatedText)<StyledTopTabsBarProps>`
  text-align: center;
  color: ${(props) => props.theme.ctaText};
  font-size: 16px;
  ${(props) => props.isFocused && activeText}
`;
