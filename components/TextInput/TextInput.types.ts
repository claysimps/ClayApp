import { TextInputProps } from "react-native";
import { ThemeProps } from "../../constants";
import { StyledInputProps, StyledInputTextProps } from "./TextInput.styles";

export interface InputProps
  extends TextInputProps,
    ThemeProps,
    StyledInputProps,
    StyledInputTextProps {
  value: string;
  fieldName: string;
  placeholder: string;
  autoFocus?: boolean;
}
