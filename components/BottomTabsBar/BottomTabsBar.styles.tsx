import styled, { css } from "styled-components/native";
import { Pressable, Animated } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";

import { Layout, ThemeProps, neuDepth, NeuDepthProps } from "../../constants";
import { StyledBaseText } from "../Text";

export interface StyledBottomTabProps extends NeuDepthProps, ThemeProps {
  isActive?: boolean;
  bulb?: boolean;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

const textColor = css<StyledBottomTabProps>`
  color: ${(props) => props.theme.tabIconSelected};
  font-size: 8px;
`;
const buttonShape = css<StyledBottomTabProps>`
  shadow-offset: -6px -6px;
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
  height: ${Layout.roundButton.small}px;
  width: ${Layout.roundButton.small}px;
  border-radius: 28px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "normal"]};
  shadow-offset: 0px 0px;
  ${(props) => props.bulb && buttonShape}
`;

export const StyledDetailWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonText = styled(StyledBaseText)<StyledBottomTabProps>`
  font-size: 12px;
  font-weight: bold;
  opacity: 1;
  color: ${(props) => props.theme.tabIconDefault};
  ${(props) => props.isActive && textColor}
`;
