import React from "react";
import { StyledCardContainer, StyledCardSpacer } from "./Card.styles";
import { CardHeader } from "./CardHeader";
import { CardBody, CardBodyButton } from "./CardBody";
import { CardProps } from "./Card.types";

export const Card = ({ children }: CardProps) => (
  <>
    <StyledCardSpacer>
      <StyledCardContainer>
        <StyledCardContainer
        // inner
        >
          {children}
        </StyledCardContainer>
      </StyledCardContainer>
    </StyledCardSpacer>
  </>
);

export const CardCanvas = ({ children }: CardProps) => (
  <>
    <StyledCardSpacer>
      <StyledCardContainer>{children}</StyledCardContainer>
    </StyledCardSpacer>
  </>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.BodyButton = CardBodyButton;

CardCanvas.Header = CardHeader;
CardCanvas.Body = CardBody;
CardCanvas.BodyButton = CardBodyButton;
