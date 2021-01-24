import React from "react";
import { View } from "react-native";

export const ScreenLayoutInfo = ({
  children,
}: {
  children: React.ReactNode;
}) => <View style={{ flex: 1 }}>{children}</View>;
