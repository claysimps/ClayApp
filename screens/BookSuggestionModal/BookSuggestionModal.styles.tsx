import styled from "styled-components/native";
import { StyledBaseText } from "../../components";
import { Layout } from "../../constants";

const inputWidth = Math.round(Layout.input.width);

export const StyledInputTitleWrapper = styled.View`
  width: ${inputWidth}px;
  align-items: flex-start;
  padding: 0px 20px;
`;

export const StyledInputTitle = styled(StyledBaseText)`
  color: ${(props) => props.theme.primary};
`;

export const StyledButtonWrapper = styled.View`
  flex-direction: row;
  align-content: space-between;
`;
