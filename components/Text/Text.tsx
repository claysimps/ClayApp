import styled from "styled-components/native";
import {
  typography,
  ThemeProps,
  light,
  dark,
  red,
  TypographyProps,
} from "../../constants";

export interface StyledBaseTextProps extends TypographyProps, ThemeProps {
  fontColour?:
    | keyof typeof light.theme
    | keyof typeof dark.theme
    | keyof typeof red.theme;
}

export const StyledBaseText = styled.Text<StyledBaseTextProps>`
  font-family: ${typography.fontFamily.primary};
  font-size: 16px;
  font-weight: ${(props) =>
    typography.fontWeight[props.fontWeight || "regular"]};
  color: ${(props) => props.theme[props.fontColour || "text"]};
`;
