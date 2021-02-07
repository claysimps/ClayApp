import styled from "styled-components/native";
import { Layout } from "../../constants";

const inputWidth = Math.round(Layout.input.width);

export const StyledContactModalView = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px 0px;
`;

export const StyledTextWrapper = styled.View`
  width: ${inputWidth}px;
  align-items: center;
  padding: 10px 0px 0px 10px;
`;

export const StyledButtonWrapper = styled.View`
  justify-content: center;
  bottom: 30px;
  position: absolute;
`;
