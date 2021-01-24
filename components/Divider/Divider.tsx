import React from "react";

import {
  StyledNeuDivider,
  // StyledDividerSpace,
  StyledDividerContainer,
} from "./Divider.styles";
import { DividerProps } from "./Divider.types";

export const Divider: React.FC<DividerProps> = ({ depth, fill = false }) => {
  return (
    <StyledDividerContainer>
      <StyledNeuDivider fill={fill} depth={depth}>
        <StyledNeuDivider fill={fill} depth={depth}>
          {/* <StyledDividerSpace /> */}
        </StyledNeuDivider>
      </StyledNeuDivider>
    </StyledDividerContainer>
  );
};
