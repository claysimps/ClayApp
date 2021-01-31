import { PressableProps } from "react-native";
import { StyledButtonProps } from "./Button.styles";

export interface ButtonProps extends StyledButtonProps, PressableProps {
  title: string;
}
