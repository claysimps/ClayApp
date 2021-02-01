import { Animated } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";
import styled from "styled-components/native";
import {
  NeuDepthProps,
  neuDepth,
  font,
  ThemeProps,
  Layout,
  light,
  dark,
  pink,
} from "../../constants";

import { StyledBaseText } from "../Text";

export interface StyledCardProps extends NeuDepthProps, ThemeProps {
  fill?: boolean;
  textColor?: typeof light.theme | typeof dark.theme | typeof pink.theme;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

export const StyledCardSpacer = styled.View`
  padding: 15px 0px;
`;

export const StyledCardContainer = styled(AnimatedNeomorph)<StyledCardProps>`
  border-radius: 35px;
  width: ${Layout.cardSize.width}px;
  height: ${Layout.cardSize.height}px;
  background: ${(props) => props.theme.background};
  shadow-radius: ${(props) => neuDepth[props.depth || "tall"]};
`;

export const StyledCardHeader = styled.View<StyledCardProps>`
  justify-content: center;
  align-items: center;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  min-height: 85px;
  background: ${(props) => props.theme.primary};
`;

export const StyledCardBodyWrapper = styled.View<StyledCardProps>`
  height: 180px;
  /* flex-direction: column; */
  flex: 1;
  padding: 15px;
`;

export const StyledCardBodyButtonWrapper = styled.View<StyledCardProps>`
  height: 180px;
  justify-content: center;
  flex-direction: row;
  flex: 1;
`;

export const StyledCardBodyContainer = styled.View<StyledCardProps>`
  /* align-items: center; */
  flex-direction: row;
`;

export const StyledHeaderText = styled(StyledBaseText)`
  font-weight: 900;
  font-size: 14px;
  color: white;
`;
