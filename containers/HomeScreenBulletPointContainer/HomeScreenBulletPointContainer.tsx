import React from "react";
import {
  StyledBulletPointContainer,
  StyledBulletPointHeaderText,
  StyledBulletPoint,
  StyledBulletPointWrapper,
} from "./HomeScreenBulletPointContainer.styles";
import { StyledBaseText } from "components";
import { bulletPointDetails, bulletPointTitles } from "./bulletPointDetails";

export const HomeScreenBulletPointContainer = () => (
  <StyledBulletPointContainer>
    {bulletPointTitles.map((action, index) => {
      const { title, bulletPoint } = bulletPointDetails[action];
      return (
        <StyledBulletPointWrapper key={index}>
          <StyledBulletPointHeaderText fontWeight="black">
            {title}
          </StyledBulletPointHeaderText>
          {bulletPoint.map((text) => (
            <StyledBulletPoint
              key={text}
              color="rgb(218,165,32)"
              bulletUnicode={0x2605}>
              <StyledBaseText>{text}</StyledBaseText>
            </StyledBulletPoint>
          ))}
        </StyledBulletPointWrapper>
      );
    })}
  </StyledBulletPointContainer>
);
