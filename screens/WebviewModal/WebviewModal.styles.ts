import styled from "styled-components/native";
import GestureRecognizer from "react-native-swipe-gestures";
import { ThemeProps } from "../../constants";

export interface StyledWebModalProps extends ThemeProps {}

export const StyledSafeAreaView = styled.SafeAreaView<StyledWebModalProps>`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const StyledGestureRecognizer = styled(
  GestureRecognizer,
)<StyledWebModalProps>`
  flex: 1;
  background: ${(props) => props.theme.background};
`;
