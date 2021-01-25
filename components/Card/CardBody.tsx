import React from "react";
import {
  StyledCardBodyWrapper,
  StyledCardBodyButtonContainer,
  StyledCardBodyContainer,
  StyledBodyText,
} from "./Card.styles";

import { CardProps } from "./Card.types";

export const CardBody = ({ children }: CardProps) => (
  <StyledCardBodyButtonContainer>
    <StyledCardBodyWrapper>{children}</StyledCardBodyWrapper>
  </StyledCardBodyButtonContainer>
);

export const CardBodyButton = ({ title, textColor }: CardProps) => (
  <StyledCardBodyContainer>
    {title && <StyledBodyText textColor={textColor}>{title}</StyledBodyText>}
  </StyledCardBodyContainer>
);
