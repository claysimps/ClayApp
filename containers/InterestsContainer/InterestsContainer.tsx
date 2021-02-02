import React from "react";
// import ReactMore from "react-native-read-more-text";
import { InterestsProps } from "./InterestsContainer.types";
import {
  StyledInterestsListContainer,
  StyledInterestsWrapper,
  StyledInterestsText,
} from "./InterestsContainer.styles";
import { Divider } from "components";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const InterestsContainer = ({
  title,
  author,
  classification,
  synopsis,
  bookUrl,
  onPress,
}: InterestsProps) => {
  return (
    <StyledInterestsListContainer>
      <StyledInterestsWrapper>
        <StyledInterestsText size={22} fontWeight="black">
          {title}
        </StyledInterestsText>
        <StyledInterestsText size={18} fontWeight="regular">
          {author}
        </StyledInterestsText>
        {classification && (
          <StyledInterestsText size={16} fontWeight="bold">
            {classification}
          </StyledInterestsText>
        )}
        {bookUrl && (
          <TouchableWithoutFeedback onPress={onPress}>
            <StyledInterestsText underline size={16} fontWeight="regular">
              View Book
            </StyledInterestsText>
          </TouchableWithoutFeedback>
        )}
        {synopsis && (
          <StyledInterestsText size={16} fontWeight="regular">
            {synopsis}
          </StyledInterestsText>
        )}
      </StyledInterestsWrapper>
      <Divider raisedDivider />
    </StyledInterestsListContainer>
  );
};
