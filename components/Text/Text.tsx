import styled from "styled-components/native";
import { StyledBaseTextProps } from "./Text.types";
import { font } from "../../constants";

export const StyledBaseText = styled.Text<StyledBaseTextProps>`
  font-family: ${font.fontFamily.primary};
  font-size: ${(props) => props.size || 16}px;
  font-weight: ${(props) => font.fontWeight[props.fontWeight || "regular"]};
  color: ${(props) => props.theme[props.fontColour || "text"]};
`;
