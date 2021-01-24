import React from "react";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { StyledTopTabsBarProps } from "./TopTabsBar.styles";
import { LayoutProps } from "styled-system";

export interface TopTabsBarProps
  extends MaterialTopTabBarProps,
    StyledTopTabsBarProps,
    LayoutProps {
  id?: string;
  children?: React.ReactNode;
  text?: string;
}
