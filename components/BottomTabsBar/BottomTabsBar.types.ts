import React from "react";

import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from "@react-navigation/bottom-tabs";

export interface BottomTabsBarProps
  extends BottomTabBarOptions,
    BottomTabBarProps {
  id?: string;
  children?: React.ReactNode;
  text?: string;
  iconName?: string;
}
