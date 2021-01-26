import React from "react";
import { Card, StyledBaseText } from "components";
import {
  StyledPortfolioListContainer,
  StyledCardBodyText,
} from "./PortfolioBodyContainer.styles";
import { PortfolioCardProps } from "./PortfolioBodyContainer.types";

export const PortfolioBodyContainer = ({
  headerTitle,
  headerBody,
  headerFooter,
  cardBodyText,
}: PortfolioCardProps) => {
  return (
    <StyledPortfolioListContainer>
      <Card>
        <Card.Header>
          <StyledBaseText fontSize={24} fontWeight="bold">
            {headerTitle}
          </StyledBaseText>
          <StyledBaseText fontSize={16} fontWeight="regular">
            {headerBody}
          </StyledBaseText>
          <StyledBaseText fontSize={18} fontWeight="semiBold">
            {headerFooter}
          </StyledBaseText>
        </Card.Header>
        <Card.Body>
          <StyledBaseText fontSize={16} fontWeight="regular">
            {cardBodyText}
          </StyledBaseText>
        </Card.Body>
      </Card>
    </StyledPortfolioListContainer>
  );
};
