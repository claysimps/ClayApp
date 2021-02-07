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

export interface StyledButtonRoundProps extends ThemeProps, NeuDepthProps {
  pressed?: boolean;
  ctaButton?: boolean;
  buttonColour?:
    | keyof typeof light.theme
    | keyof typeof dark.theme
    | keyof typeof pink.theme;
}

const buttonSize = Math.round(Layout.roundButton.large);

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);
const pressedButtonSize = Math.round(Layout.roundButton.large) * 0.9;

const pressedState = css`
  shadow-offset: -3px -3px;
  width: ${pressedButtonSize}px;
  height: ${pressedButtonSize}px;
  shadow-radius: ${neuDepth.shallow};
`;

export const StyledPressable = styled(Pressable)`
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  align-items: center;
  justify-content: center;
`;

export const StyledNeuShadowContainer = styled(
  AnimatedNeomorph,
)<StyledButtonRoundProps>`
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  background: ${(props) => props.theme.background};
  shadow-offset: 6px 6px;
  border-radius: 35px;
  ${(props) => props.pressed && pressedState};
`;

export const StyledButtonWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
