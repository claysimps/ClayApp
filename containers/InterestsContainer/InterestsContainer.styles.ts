import styled, { css } from "styled-components/native";
import { Layout } from "../../constants";
import { StyledBaseText, StyledBaseTextProps } from "../../components";

export interface StyledInterestsContainerProps extends StyledBaseTextProps {
  underline?: boolean;
}

const underlineText = css`
  text-decoration: underline ${(props) => props.theme.text};
`;

export const StyledInterestsListContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const StyledInterestsWrapper = styled.View`
  width: ${Layout.cardSize.width}px;
  padding: 5px 15px;
`;

export const StyledInterestsText = styled(
  StyledBaseText,
)<StyledInterestsContainerProps>`
  padding-bottom: 8px;
  ${(props) => props.underline && underlineText}
`;
