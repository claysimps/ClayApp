import styled from "styled-components/native";
import { Neomorph } from "react-native-neomorph-shadows";
import { Animated } from "react-native";
import { Layout, ThemeProps, neuDepth, NeuDepthProps } from "../../constants";

export interface StyledModalProps extends NeuDepthProps, ThemeProps {
  size?: number;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

const modalWidth = Layout.modalSize.width;
const modalHeight = Layout.modalSize.height;

export const StyledModalContainer = styled.View<StyledModalProps>`
  background: ${(props) => props.theme.modalBackground};
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  flex: 1;
`;

export const StyledModalWrapper = styled.View<StyledModalProps>`
  padding: 10px;
  background: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
  border-radius: 35px;
`;

export const StyledNeuShadow = styled(AnimatedNeomorph)<StyledModalProps>`
  shadow-radius: ${(props) => neuDepth[props.depth || "giant"]};
  background: ${(props) => props.theme.background};
  width: ${(props) => props.size || modalWidth}px;
  height: ${(props) => props.size || modalHeight}px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
`;
