import styled, { css } from "styled-components/native";

import { StyledBaseText } from "components";
import { font } from "../../constants";

export interface StyledUnicornButtonTextProps {
  emoji: boolean;
}

const emojiSize = css`
  font-size: 200px;
`;
export const StyledUnicornButtonText = styled(
  StyledBaseText,
)<StyledUnicornButtonTextProps>`
  font-size: 28px;
  font-weight: ${font.fontWeight.black};
  ${(props) => props.emoji && emojiSize}
`;
