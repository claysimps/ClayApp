import styled from "styled-components/native";

import { Layout } from "../../constants";
import { StyledBaseText } from "..";

export const StyledThemeContainer = styled.View`
  align-items: center;

  /* width: ${Layout.content.width}px; */
  /* justify-content: center; */
`;
// export const StyledPickerWrapper = styled.View`
//   align-items: center;
//   width: ${neuDimensions.outputDisplay.width}px;
//   justify-content: flex-end;
//   margin-bottom: 30px;
// `;

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

// export const StyledSwitchText = styled(StyledBaseText)`
//   color: ${(props) => props.theme.fontColor.primary};
//   font-size: 20px;
//   padding: 20px 0;
// `;
