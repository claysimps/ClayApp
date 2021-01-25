import styled, { css } from "styled-components/native";
import { Pressable, Animated } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";

import {
  Layout,
  ThemeProps,
  neuDepth,
  NeuDepthProps,
  light,
  dark,
  red,
} from "../../constants";
import { StyledBaseText } from "../Text";
import { Icon } from "../Icon";

export interface StyledBottomTabProps extends NeuDepthProps, ThemeProps {
  isActive?: boolean;
  bulb?: boolean;
  iconColor?: typeof light.theme | typeof dark.theme | typeof red.theme;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

const textColor = css<StyledBottomTabProps>`
  color: ${(props) => props.theme.text};
`;
const buttonShape = css<StyledBottomTabProps>`
  shadow-offset: 0px 0px;
`;

export const StyledTabBarShadow = styled(
  AnimatedNeomorph,
)<StyledBottomTabProps>`
  align-content: space-around;
  align-items: center;
  height: ${Layout.tabBar.height}px;
  width: ${Layout.tabBar.width}px;
  padding-bottom: 15px;
  flex-direction: row;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "giant"]};
`;

export const StyledPressable = styled(Pressable)`
  flex: 1;
  align-items: center;
  background: ${(props) => props.theme.background};
`;

export const StyledNeuShadow = styled(AnimatedNeomorph)<StyledBottomTabProps>`
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  border-radius: 28px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "normal"]};
  shadow-offset: -6px -6px;
  ${(props) => props.bulb && buttonShape}
`;

export const StyledDetailWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTabIcon = styled(Icon)<StyledBottomTabProps>`
  color: ${(props) => props.theme[props.iconColor || "primary"]};
`;

export const StyledButtonText = styled(StyledBaseText)<StyledBottomTabProps>`
  font-size: 8px;
  opacity: 1;
  color: ${(props) => props.theme.primary};
  ${(props) => props.isActive && textColor}
`;
