import React from "react";
import { Card, StyledBaseText, Button } from "components";
import {
  StyledPortfolioListContainer,
  StyledButtonWrapper,
} from "./PortfolioContainer.styles";
import { PortfolioPayload as PortfolioPayloadProps } from "../../graphql/generated/gql";

export const PortfolioContainer = ({
  id,
  headerTitle,
  headerBody,
  headerFooter,
  cardBodyText,
  buttonOptionOne,
  buttonOptionTwo,
}: PortfolioPayloadProps) => {
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
          <StyledBaseText fontSize={16} fontWeight="regular">
            {cardBodyText}
          </StyledBaseText>
          <StyledButtonWrapper>
            <Button title={buttonOptionOne} />
            {buttonOptionTwo && <Button title={buttonOptionTwo} />}
          </StyledButtonWrapper>
        </Card.Body>
      </Card>
    </StyledPortfolioListContainer>
  );
};
