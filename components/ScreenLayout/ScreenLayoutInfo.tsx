import React from "react";
import { StyledInfoView, StyledInfoText } from "./ScreenLayout.styles";
import { ScrollView } from "react-native-gesture-handler";

export const ScreenLayoutInfo = ({
  children,
  infoText,
}: {
  children?: React.ReactNode;
  infoText?: string;
}) => (
  <StyledInfoView>
    <ScrollView>
      {infoText && <StyledInfoText>{infoText}</StyledInfoText>}
      {children}
    </ScrollView>
  </StyledInfoView>
);
