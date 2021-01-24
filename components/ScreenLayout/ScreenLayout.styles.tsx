import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProps, typography } from "../../constants";
import { StyledBaseText } from "../Text";

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;
export const StyledSafeAreaView = styled(SafeAreaView)<ThemeProps>`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const LayoutDivider = styled.View<ThemeProps>`
  width: 90%;
  align-self: center;
  border: 1px solid ${(props) => props.theme.primary};
  margin: 20px;
  justify-content: center;
`;

export const StyledHeaderText = styled(StyledBaseText)`
  text-align: center;
  font-size: 32px;
  font-weight: ${(props) =>
    typography.fontWeight[props.fontWeight || "regular"]};
  color: ${(props) => props.theme.ctaText};
`;
