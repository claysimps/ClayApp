import React from "react";
import { StyledVectorIcon } from "./Icon.styles";

export interface IconProps {
  size: keyof typeof IconSizes;
  name: string;
  iconColor?: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const Icon = ({ size, name, iconColor = "blue" }: IconProps) => (
  <StyledVectorIcon name={name} size={IconSizes[size]} color={iconColor} />
);
