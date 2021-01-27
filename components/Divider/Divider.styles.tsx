import { Animated } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";
import styled, { css } from "styled-components/native";

import {
  neuDepth,
  NeuDepthProps,
  ThemeProps,
  light,
  dark,
  Layout,
} from "../../constants";

const screenDivider = Layout.window.width * 1.1;
const infoDivider = Layout.content.width;

export interface StyledDividerProps extends NeuDepthProps, ThemeProps {
  raisedDivider?: boolean;
  half?: boolean;
  textColor?: keyof typeof light.theme | keyof typeof dark.theme;
}

const raised = css<StyledDividerProps>`
  shadow-radius: ${(props) => neuDepth[props.depth || "tall"]};
  height: 15px;
  shadow-offset: 0px 0px;
  width: ${infoDivider}px;
`;

export const StyledDividerContainer = styled.View`
  padding: 10px 0px;
  align-items: center;
`;

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

export const StyledNeuDivider = styled(AnimatedNeomorph)<StyledDividerProps>`
  width: ${screenDivider}px;
  height: 5px;

  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "shallow"]};
  shadow-offset: -6px -6px;
  ${(props) => props.raisedDivider && raised};
`;

// export const StyledNeuDivider = styled(AnimatedNeomorph)<StyledDividerProps>`
//   width: ${Layout.tabBar.width}px;
//   justify-content: center;
//   align-items: center;
//   background: ${(props) => props.theme.background};
//   shadow-radius: ${(props) => neuDepth[props.depth || "tall"]};
//   height: 10px;
//   /* shadow-offset: -2px -2px; */
//   ${(props) => props.raisedDivider && raised};
// `;
