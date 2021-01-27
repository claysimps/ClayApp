import React from "react";
import ReadMore from "react-native-read-more-text";
import { InterestsProps } from "./InterestsContainer.types";
import {
  StyledInterestsListContainer,
  StyledInterestsWrapper,
  StyledInterestsText,
} from "./InterestsContainer.styles";
import { Divider } from "../../components";

export const InterestsContainer = ({
  title,
  creator,
  type,
  moreInfo,
}: InterestsProps) => {
  return (
    <StyledInterestsListContainer>
      <StyledInterestsWrapper>
        <StyledInterestsText fontSize={28} fontWeight="black">
          {title}
        </StyledInterestsText>
        <StyledInterestsText fontSize={18} fontWeight="regular">
          {creator}
        </StyledInterestsText>
        <StyledInterestsText fontSize={18} fontWeight="bold">
          {type}
        </StyledInterestsText>
        <ReadMore numberOfLines={2}>
          <StyledInterestsText fontSize={16} fontWeight="regular">
            {moreInfo}
          </StyledInterestsText>
        </ReadMore>
      </StyledInterestsWrapper>
      <Divider raisedDivider />
    </StyledInterestsListContainer>
  );
};
