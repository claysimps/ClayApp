import styled from "styled-components/native";
import { Neomorph } from "react-native-neomorph-shadows";
import { Layout, ThemeProps, neuDepth, NeuDepthProps } from "../../constants";

export interface StyledBookSuggestionModalProps
  extends NeuDepthProps,
    ThemeProps {}

const modalWidth = Layout.modalSize.width;
const modalHeight = Layout.modalSize.height;

export const StyledModalContainer = styled.View<StyledBookSuggestionModalProps>`
  background: ${(props) => props.theme.modalBackground};
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  flex: 1;
`;

export const StyledModalWrapper = styled.View<StyledBookSuggestionModalProps>`
  padding: 10px;
  background: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
  border-radius: 35px;
`;

export const StyledNeuShadow = styled(Neomorph)<StyledBookSuggestionModalProps>`
  shadow-radius: ${(props) => neuDepth[props.depth || "giant"]};
  background: ${(props) => props.theme.background};
  width: ${modalWidth}px;
  height: ${modalHeight}px;
  border-radius: 35px;
`;
