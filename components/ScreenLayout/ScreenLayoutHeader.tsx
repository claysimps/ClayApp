import React from "react";
import { StyledHeaderView, StyledHeaderText } from "./ScreenLayout.styles";

export interface ScreenLayoutHeaderProps {
  children?: React.ReactNode;
  title?: string;
}

export const ScreenLayoutHeader = ({
  children,
  title,
}: ScreenLayoutHeaderProps) => (
  <StyledHeaderView>
    {title && <StyledHeaderText>{title}</StyledHeaderText>}
    {children}
  </StyledHeaderView>
);
