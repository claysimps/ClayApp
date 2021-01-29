import styled from "styled-components/native";

import { Layout } from "../../constants";
import { StyledBaseText } from "../Text";

export const StyledThemeContainer = styled.View`
  align-items: center;
`;

export const StyledSwitchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${Layout.content.width}px;
  padding-bottom: 20px;
`;

export const StyledToggleText = styled(StyledBaseText)`
  color: ${(props) => props.theme.primary};
  font-size: 20px;
  padding: 20px 0;
`;
