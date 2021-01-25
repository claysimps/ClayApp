import { Animated } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";
import styled from "styled-components/native";
import { typography } from "../../constants/typography";
import { NeuDepthProps, neuDepth } from "../../constants/neuDepth";
import { ThemeProps } from "../../constants/themes/themes.types";
import { StyledBaseText } from "../Text";
import { Layout, light, dark, red } from "../../constants";

export interface StyledCardProps extends NeuDepthProps, ThemeProps {
  fill?: boolean;
  textColor?: typeof light.theme | typeof dark.theme | typeof red.theme;
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
  border: 1px solid ${(props) => props.theme.primary};
  shadow-radius: ${(props) => neuDepth[props.depth || "tall"]};
`;

export const StyledCardHeader = styled.View<StyledCardProps>`
  justify-content: center;
  align-items: center;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  min-height: 60px;
  background: ${(props) => props.theme.primary};
`;

export const StyledCardBodyWrapper = styled.View<StyledCardProps>`
  height: 180px;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const StyledCardBodyButtonWrapper = styled.View<StyledCardProps>`
  height: 180px;

  /* align-items: center; */
  justify-content: center;
  flex-direction: row;
  flex: 1;
`;
export const StyledCardBodyContainer = styled.View<StyledCardProps>`
  align-items: center;
  align-content: space-between;
`;

export const StyledCardBodyButtonContainer = styled.View<StyledCardProps>`
  align-items: center;
  flex-direction: row;
`;

export const StyledHeaderText = styled(StyledBaseText)`
  padding: 0px 15px;
  font-weight: 900;
  font-size: 14px;
  color: white;
`;

export const StyledBodyText = styled.Text<StyledCardProps>`
  padding: 20px 15px 0px;
  align-content: space-between;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  color: ${(props) => props.theme.text};
`;
