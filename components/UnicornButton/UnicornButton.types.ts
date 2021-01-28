import { PressableProps } from "react-native";
import { StyledUnicornButtonProps } from "./UnicornButton.styles";
import { ReactNode } from "react";

export interface UnicornButtonProps
  extends StyledUnicornButtonProps,
    PressableProps {
  children: ReactNode;
}
