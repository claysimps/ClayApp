import styled from "styled-components/native";
import { Neomorph } from "react-native-neomorph-shadows";
import { Animated } from "react-native";
import {
  NeuDepthProps,
  ThemeProps,
  neuDepth,
  FontProps,
  font,
} from "../../constants";

export interface StyledInputProps extends NeuDepthProps, ThemeProps {}

export interface StyledInputTextProps extends ThemeProps {
  textColor?: keyof ThemeProps["theme"];
  fontWeight?: FontProps["fontWeight"];
  fieldName: string;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

export const StyledInputWrapper = styled(AnimatedNeomorph)<StyledInputProps>`
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  width: 300px;
  height: 40px;
  margin: 20px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "normal"]};
`;
export const StyledTextInput = styled.TextInput<StyledInputTextProps>`
  font-family: ${font.fontFamily.primary};
  font-weight: ${(props) => font.fontWeight[props.fontWeight || "regular"]};
  font-size: 22px;
  color: ${(props) => props.theme[props.textColor || "primary"]};
`;
