import React from "react";
import { View } from "react-native";
import { Layout } from "../../constants";

const bodyHeight = Layout.window.height * 0.6;

export const ScreenLayoutBody = ({
  children,
}: {
  children: React.ReactNode;
}) => <View style={{ height: bodyHeight }}>{children}</View>;
