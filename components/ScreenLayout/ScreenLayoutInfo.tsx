import React from "react";
import { StyledInfoView, StyledInfoText } from "./ScreenLayout.styles";

export const ScreenLayoutInfo = ({
  children,
  infoText,
}: {
  children?: React.ReactNode;
  infoText?: string;
}) => (
  <StyledInfoView>
    {infoText && <StyledInfoText>{infoText}</StyledInfoText>}
    {children}
  </StyledInfoView>
);
