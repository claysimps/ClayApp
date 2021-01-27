import { StyledUnicornButtonProps } from "./UnicornButton.styles";
import { ThemeModeEnum } from "state";

export interface UnicornButtonProps extends StyledUnicornButtonProps {
  onPress: (value: ThemeModeEnum) => Promise<void>;
}
