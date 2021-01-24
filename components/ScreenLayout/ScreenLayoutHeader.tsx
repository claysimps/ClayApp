import React from "react";
import { View } from "react-native";
import { StyledHeaderText } from "./ScreenLayout.styles";

export interface ScreenLayoutHeaderProps {
  children?: React.ReactNode;
  title?: string;
}

export const ScreenLayoutHeader = ({
  children,
  title,
}: ScreenLayoutHeaderProps) => (
  <View style={{ flex: 1 }}>
    {title && <StyledHeaderText>{title}</StyledHeaderText>}
    {children}
  </View>
);
