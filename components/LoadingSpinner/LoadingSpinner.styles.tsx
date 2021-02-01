import styled from "styled-components/native";
import Spinner from "react-native-loading-spinner-overlay";

import { ThemeProps } from "../../constants";

export interface StyledLoadingSpinnerProps extends ThemeProps {}

export const StyledSpinnerContainer = styled.View<StyledLoadingSpinnerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background: ${(props) => props.theme.tint}; */
`;

export const StyledSpinner = styled(Spinner)`
  color: ${(props) => props.theme.primary};
`;
