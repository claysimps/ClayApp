import styled, { css } from "styled-components/native";
import { Neomorph } from "react-native-neomorph-shadows";
import { Animated } from "react-native";
import InputScrollView from "react-native-input-scroll-view";
import {
  NeuDepthProps,
  ThemeProps,
  neuDepth,
  FontProps,
  font,
  Layout,
} from "../../constants";

export interface StyledInputProps extends NeuDepthProps, ThemeProps {
  multi?: boolean;
}

export interface StyledInputTextProps extends ThemeProps {
  textColor?: keyof ThemeProps["theme"];
  fontWeight?: FontProps["fontWeight"];
  fieldName: string;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);
const inputWidth = Math.round(Layout.input.width);
const inputHeight = Math.round(Layout.input.height);
const multilineHeight = Math.round(Layout.input.multiline);

const multilineText = css`
  height: ${multilineHeight}px;

  padding: 5px 10px;
`;

export const StyledInputWrapper = styled(AnimatedNeomorph)<StyledInputProps>`
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 35px;
  width: ${inputWidth}px;
  height: ${inputHeight}px;
  margin: 20px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "normal"]};
  shadow-offset: -6px -6px;
  ${(props) => props.multi && multilineText}
  padding: 0px 20px;
  flex: 1;
`;
export const StyledTextInput = styled.TextInput<StyledInputTextProps>`
  font-family: ${font.fontFamily.primary};
  font-weight: ${(props) => font.fontWeight[props.fontWeight || "regular"]};
  font-size: 22px;
  color: ${(props) => props.theme[props.textColor || "primary"]};
`;

export const StyledScrollView = styled(InputScrollView)`
  flex: 1;
`;
