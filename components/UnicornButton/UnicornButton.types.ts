import {
  StyledUnicornPillProps,
  StyledUnicornButtonProps,
} from "./UnicornButton.styles";

export interface UnicornButtonProps extends StyledUnicornButtonProps {
  onPress: () => void;
}
