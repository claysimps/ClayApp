import { Animated } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";
import styled, { css } from "styled-components/native";

import {
  neuDepth,
  NeuDepthProps,
  TypographyProps,
  ThemeProps,
  light,
  dark,
  Layout,
} from "../../constants";

export interface StyledDividerProps
  extends TypographyProps,
    NeuDepthProps,
    ThemeProps {
  fill?: boolean;
  half?: boolean;
  textColor?: keyof typeof light.theme | keyof typeof dark.theme;
}

const divColor = css<StyledDividerProps>`
  background: ${(props) => props.theme.background};
`;

export const StyledDividerContainer = styled.View`
  padding: 10px 0px;
`;

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

export const StyledNeuDivider = styled(AnimatedNeomorph)<StyledDividerProps>`
  width: ${Layout.tabBar.width}px;
  height: 5px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "shallow"]};
  shadow-offset: -2px -2px;
  ${(props) => props.fill && divColor};
`;
