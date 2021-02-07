import { PressableProps } from "react-native";
import { StyledButtonRoundProps } from "./ButtonRound.styles";

export interface ButtonRoundProps
  extends StyledButtonRoundProps,
    PressableProps {
  icon: string;
  title: string;
}
