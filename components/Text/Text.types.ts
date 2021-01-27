import { ThemeProps, light, dark, pink, FontProps } from "../../constants";
import { TypographyProps } from "styled-system";

export interface StyledBaseTextProps extends ThemeProps, TypographyProps {
  fontColour?:
    | keyof typeof light.theme
    | keyof typeof dark.theme
    | keyof typeof pink.theme;
  fontWeight?: FontProps["fontWeight"];
}
