import React from "react";
import { Card, StyledBaseText, Button } from "components";
import {
  StyledPortfolioListContainer,
  StyledButtonWrapper,
  StyledBodyContainer,
} from "./PortfolioContainer.styles";
import { PortfolioContainerProps } from "./PortfolioContainer.types";

export const PortfolioContainer = ({
  id,
  headerTitle,
  headerBody,
  headerFooter,
  cardBodyText,
  buttonOptionOne,
  buttonOptionTwo,
  buttonOneLink,
  buttonTwoLink,
  onPressButtonOne,
  onPressButtonTwo,
}: PortfolioContainerProps) => {
  return (
    <StyledPortfolioListContainer key={id}>
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
          <StyledBodyContainer>
            <StyledBaseText fontSize={16} fontWeight="regular">
              {cardBodyText}
            </StyledBaseText>
            <StyledButtonWrapper>
              <Button
                onPress={onPressButtonOne}
                title={buttonOptionOne}
                {...buttonOneLink}
              />
              {buttonOptionTwo && (
                <Button
                  onPress={onPressButtonTwo}
                  title={buttonOptionTwo}
                  {...buttonTwoLink}
                />
              )}
            </StyledButtonWrapper>
          </StyledBodyContainer>
        </Card.Body>
      </Card>
    </StyledPortfolioListContainer>
  );
};
