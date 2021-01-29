import React from "react";

import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from "@react-navigation/bottom-tabs";
import { StyledBottomTabProps } from "./BottomTabsBar.styles";

export interface BottomTabsBarProps
  extends BottomTabBarOptions,
    BottomTabBarProps,
    StyledBottomTabProps {
  id?: string;
  children?: React.ReactNode;
  text?: string;
  iconName?: string;
}
