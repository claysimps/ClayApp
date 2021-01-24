import React from "react";
import { ScreenLayoutInfo } from "./ScreenLayoutInfo";
import { ScreenLayoutBody } from "./ScreenLayoutBody";
import { ScreenLayoutHeader } from "./ScreenLayoutHeader";
import {
  StyledKeyboardAvoidingView,
  StyledSafeAreaView,
} from "./ScreenLayout.styles";

interface ScreenLayoutProps {
  children: React.ReactNode;
}

export const ScreenLayout = ({ children }: ScreenLayoutProps) => (
  <StyledKeyboardAvoidingView behavior="padding" enabled>
    <StyledSafeAreaView>{children}</StyledSafeAreaView>
  </StyledKeyboardAvoidingView>
);

ScreenLayout.Header = ScreenLayoutHeader;
ScreenLayout.Info = ScreenLayoutInfo;
ScreenLayout.Body = ScreenLayoutBody;
ScreenLayout.Header = ScreenLayoutHeader;
