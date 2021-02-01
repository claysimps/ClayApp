import React from "react";
import { StyledCardBodyWrapper, StyledCardBodyContainer } from "./Card.styles";

import { CardProps } from "./Card.types";

export const CardBody = ({ children }: CardProps) => (
  <StyledCardBodyContainer>
    <StyledCardBodyWrapper>{children}</StyledCardBodyWrapper>
  </StyledCardBodyContainer>
);
