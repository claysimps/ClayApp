import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProps, typography, Layout } from "../../constants";
import { StyledBaseText } from "../Text";

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;
export const StyledSafeAreaView = styled(SafeAreaView)<ThemeProps>`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const StyledHeaderText = styled(StyledBaseText)`
  text-align: center;
  font-size: 32px;
  font-weight: ${(props) => typography.fontWeight[props.fontWeight || "black"]};
  color: ${(props) => props.theme.ctaText};
`;

export const StyledHeaderView = styled.View`
  padding: 10px;
  width: ${Layout.window.width}px;
`;
export const StyledInfoView = styled.View`
  flex: 1;
  align-items: center;
`;
export const StyledInfoText = styled(StyledBaseText)`
  width: ${Layout.content.width}px;
  text-align: center;
  justify-content: center;
`;
