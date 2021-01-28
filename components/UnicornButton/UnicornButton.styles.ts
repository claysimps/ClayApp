import { Pressable, Animated } from "react-native";
import styled, { css } from "styled-components/native";
import { Neomorph } from "react-native-neomorph-shadows";
import { neuDepth, NeuDepthProps, ThemeProps, Layout } from "../../constants";

export interface StyledUnicornButtonProps extends NeuDepthProps, ThemeProps {
  pressed?: boolean;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);
const buttonSize = Layout.content.width;
const pressedButtonSize = Layout.content.width * 0.95;
const buttonBorderRadius = Layout.content.width / 2;

export const pressState = css`
  width: ${pressedButtonSize}px;
  height: ${pressedButtonSize}px;
  shadow-offset: -3px -3px;
`;

export const StyledPressable = styled(Pressable)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledNeuButtonShadow = styled(
  AnimatedNeomorph,
)<StyledUnicornButtonProps>`
  justify-content: center;
  align-items: center;
  border-radius: ${buttonBorderRadius}px;
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  margin: 20px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "giant"]};
  ${(props) => props.pressed && pressState}
`;

export const StyledTextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
