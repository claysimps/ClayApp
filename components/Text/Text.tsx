import styled from "styled-components/native";
import { StyledBaseTextProps } from "./Text.types";
import { font } from "../../constants";

export const StyledBaseText = styled.Text<StyledBaseTextProps>`
  font-family: ${font.fontFamily.primary};
  font-size: 16px;
  font-weight: ${(props) => font.fontWeight[props.fontWeight || "regular"]};
  color: ${(props) => props.theme[props.fontColour || "text"]};
`;
