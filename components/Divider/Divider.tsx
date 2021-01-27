import React from "react";

import {
  StyledNeuDivider,
  // StyledDividerSpace,
  StyledDividerContainer,
} from "./Divider.styles";
import { DividerProps } from "./Divider.types";

export const Divider: React.FC<DividerProps> = ({
  depth,
  raisedDivider = false,
}) => {
  return (
    <StyledDividerContainer>
      <StyledNeuDivider raisedDivider={raisedDivider} depth={depth}>
        <StyledNeuDivider raisedDivider={raisedDivider} depth={depth} />
      </StyledNeuDivider>
    </StyledDividerContainer>
  );
};
