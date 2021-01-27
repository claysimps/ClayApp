import React from "react";
import { Card, StyledBaseText } from "components";
import { StyledPortfolioListContainer } from "./PortfolioContainer.styles";
import { PortfolioCardProps } from "./PortfolioContainer.types";

export const PortfolioContainer = ({
  headerTitle,
  headerBody,
  headerFooter,
  cardBodyText,
}: PortfolioCardProps) => {
  return (
    <StyledPortfolioListContainer>
      <Card>
        <Card.Header>
          <StyledBaseText
            fontColour="textOnColourBg"
            fontSize={24}
            fontWeight="bold">
            {headerTitle}
          </StyledBaseText>
          <StyledBaseText
            fontColour="textOnColourBg"
            fontSize={16}
            fontWeight="regular">
            {headerBody}
          </StyledBaseText>
          <StyledBaseText
            fontColour="textOnColourBg"
            fontSize={18}
            fontWeight="semiBold">
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
