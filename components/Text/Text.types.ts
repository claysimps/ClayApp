import { ThemeProps, light, dark, red, FontProps } from "../../constants";
import { TypographyProps } from "styled-system";

export interface StyledBaseTextProps extends ThemeProps, TypographyProps {
  fontColour?:
    | keyof typeof light.theme
    | keyof typeof dark.theme
    | keyof typeof red.theme;
  fontWeight?: FontProps["fontWeight"];
}
