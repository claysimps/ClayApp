import styled, { css } from "styled-components/native";
import { Pressable, Animated } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";
import {
  ThemeProps,
  light,
  dark,
  pink,
  Layout,
  NeuDepthProps,
  neuDepth,
  font,
} from "../../constants";
import { StyledBaseText } from "../Text";

export interface StyledButtonProps extends ThemeProps, NeuDepthProps {
  pressed?: boolean;
  ctaButton?: boolean;
  buttonColour?:
    | keyof typeof light.theme
    | keyof typeof dark.theme
    | keyof typeof pink.theme;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);
const buttonHeight = Math.round(Layout.button.height);
const buttonWidth = Math.round(Layout.button.half);
const pressedButtonHeight = Math.round(Layout.button.height) * 0.9;
const pressedButtonWidth = Math.round(Layout.button.half) * 0.9;

const ctaButton = css`
  border: ${(props) => props.theme.primary};
`;

const ctaButtonText = css`
  font-weight: ${font.fontWeight.bold};
`;

const pressedState = css`
  shadow-offset: -3px -3px;
  width: ${pressedButtonWidth}px;
  height: ${pressedButtonHeight}px;
  shadow-radius: ${neuDepth.shallow};
`;

export const StyledPressable = styled(Pressable)<StyledButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledNeuShadow = styled(AnimatedNeomorph)<StyledButtonProps>`
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  width: ${buttonWidth}px;
  height: ${buttonHeight}px;
  background: ${(props) => props.theme[props.buttonColour || "background"]};
  shadow-radius: ${(props) => neuDepth[props.depth || "tall"]};
  ${(props) => props.pressed && pressedState};
  ${(props) => props.ctaButton && ctaButton};
`;

export const StyledButtonText = styled(StyledBaseText)<StyledButtonProps>`
  text-align: center;
  color: ${(props) => props.theme.ctaText};
  font-size: 16px;
  ${(props) => props.ctaButton && ctaButtonText}
`;
