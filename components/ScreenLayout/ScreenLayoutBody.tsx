import React from "react";
import { View } from "react-native";

import { LayoutDivider } from "./ScreenLayout.styles";
import { Layout } from "../../constants/Layout";

const bodyHeight = Layout.window.height * 0.6;

export const ScreenLayoutBody = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <View style={{ height: bodyHeight }}>
    <LayoutDivider />
    {children}
  </View>
);
