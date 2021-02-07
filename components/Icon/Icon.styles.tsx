import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SMIcon from "react-native-vector-icons/Foundation";
import styled from "styled-components/native";
import { ThemeProps, light, dark, pink } from "../../constants";

export interface StyledIconProps extends ThemeProps {
  iconColour:
    | keyof typeof light.theme
    | keyof typeof dark.theme
    | keyof typeof pink.theme;
}

VectorIcon.loadFont();
SMIcon.loadFont();

export const StyledVectorIcon = styled(VectorIcon)<StyledIconProps>`
  color: ${(props) => props.theme[props.iconColour || "primary"]};
`;

export const StyledSMIcon = styled(SMIcon)<StyledIconProps>`
  color: ${(props) => props.theme[props.iconColour || "primary"]};
`;
