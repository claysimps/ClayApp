import styled from "styled-components/native";
import { Layout, ThemeProps } from "../../constants";
import { Pressable } from "react-native";

export interface StyledModalButtonProps extends ThemeProps {}

const buttonSize = Math.round(Layout.window.width * 0.15);
const buttonRadius = Math.round(Layout.window.width * 0.8);

export const StyledModalPressable = styled(Pressable)`
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  background: ${(props) => props.theme.tabIconDefault};
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${buttonRadius}px;
  border-top-left-radius: ${buttonRadius}px;
  border-bottom-left-radius: ${buttonRadius}px;
  bottom: 25px;
  right: 20px;
  position: absolute;
`;
