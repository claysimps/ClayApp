import React from "react";
import { StyledVectorIcon, StyledIconProps } from "./Icon.styles";
import { ThemeProps } from "../../constants";

export interface IconProps extends ThemeProps, StyledIconProps {
  size: keyof typeof IconSizes;
  name: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const Icon = ({ size, name, iconColour }: IconProps) => (
  <StyledVectorIcon
    name={name}
    size={IconSizes[size]}
    iconColour={iconColour}
  />
);
