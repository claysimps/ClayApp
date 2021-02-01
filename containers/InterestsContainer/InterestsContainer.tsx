import React from "react";
// import ReactMore from "react-native-read-more-text";
import { InterestsProps } from "./InterestsContainer.types";
import {
  StyledInterestsListContainer,
  StyledInterestsWrapper,
  StyledInterestsText,
} from "./InterestsContainer.styles";
import { Divider } from "components";

export const InterestsContainer = ({
  title,
  author,
  classification,
  synopsis,
  bookUrl,
}: InterestsProps) => {
  return (
    <StyledInterestsListContainer>
      <StyledInterestsWrapper>
        <StyledInterestsText fontSize={28} fontWeight="black">
          {title}
        </StyledInterestsText>
        <StyledInterestsText fontSize={18} fontWeight="regular">
          {author}
        </StyledInterestsText>
        {classification && (
          <StyledInterestsText fontSize={18} fontWeight="bold">
            {classification}
          </StyledInterestsText>
        )}
        {bookUrl && (
          <StyledInterestsText fontSize={18} fontWeight="regular">
            {bookUrl}
          </StyledInterestsText>
        )}
        {synopsis && (
          <StyledInterestsText fontSize={16} fontWeight="regular">
            {synopsis}
          </StyledInterestsText>
        )}
      </StyledInterestsWrapper>
      <Divider raisedDivider />
    </StyledInterestsListContainer>
  );
};
