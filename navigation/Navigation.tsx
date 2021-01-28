import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { RootStack } from "./RootStack";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
