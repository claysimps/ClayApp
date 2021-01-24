import React from "react";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { StyledTopTabsBarProps } from "./TopTabsBar.styles";

export interface TopTabsBarProps
  extends MaterialTopTabBarProps,
    StyledTopTabsBarProps {
  id?: string;
  children?: React.ReactNode;
  text?: string;
}
