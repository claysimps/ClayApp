import styled, { css } from "styled-components/native";
import Animated from "react-native-reanimated";
import { Neomorph } from "react-native-neomorph-shadows";
import { Layout, neuDepth } from "../../constants";
import { Pressable } from "react-native";
import { StyledBaseText } from "components";

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

const containerWidth = Layout.content.width;
const containerHeight = Layout.roundButton.small * 2;
const buttonSize = Layout.roundButton.large;

const pressedState = css`
  shadow-offset: -6px -6px;
`;

export const StyledNeuShadowContainer = styled(AnimatedNeomorph)`
  height: ${containerHeight}px;
  width: ${containerWidth}px;
  background: ${(props) => props.theme.background};
  shadow-offset: -6px -6px;
  border-radius: 35px;
  margin: 25px 0px;
`;
/* shadow-radius: ${() => neuDepth.normal}; */

export const StyledButtonWrapper = styled.View`
  flex: 1%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const StyledNeuButtonShadow = styled(AnimatedNeomorph)`
  justify-content: center;
  align-items: center;
  height: ${Layout.roundButton.small}px;
  width: ${Layout.roundButton.small}px;
  border-radius: 28px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "normal"]};
  shadow-offset: 0px 0px;
  ${(props) => props.pressed && pressedState}
`;

export const StyledPressable = styled(Pressable)`
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  align-items: center;
  justify-content: center;
`;

export const StyledProfileHeaderText = styled(StyledBaseText)`
  font-size: 28px;
  padding-top: 14px;
  text-align: left;
`;

export const StyledView = styled.View``;
/* flex: 1; */
