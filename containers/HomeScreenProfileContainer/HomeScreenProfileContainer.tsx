import React from "react";
import {
  StyledProfileContainer,
  StyledProfileHeaderText,
  StyledProfileText,
} from "./HomeScreenProfileContainer.styles";
import { profileContainer } from "./profileDetails";

const { title, text } = profileContainer;
export const HomeScreenProfileContainer = () => (
  <StyledProfileContainer>
    <StyledProfileHeaderText fontWeight="black">
      {title}
    </StyledProfileHeaderText>
    <StyledProfileText>{text}</StyledProfileText>
  </StyledProfileContainer>
);
