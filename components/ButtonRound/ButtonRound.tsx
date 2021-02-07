import React, { useState, useCallback } from "react";
import {
  StyledPressable,
  StyledNeuShadowContainer,
  StyledButtonText,
  StyledButtonWrapper,
} from "./ButtonRound.styles";
import { ButtonRoundProps } from "./ButtonRound.types";
import { SMIcon } from "../Icon";

export const ButtonRound = ({ icon, onPress, title }: ButtonRoundProps) => {
  const [isActive, setIsActive] = useState(false);

  const handlePressIn = useCallback(() => {
    setIsActive(true);
  }, [setIsActive]);
  const handlePressOut = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <StyledPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      {...title}>
      <StyledNeuShadowContainer pressed={isActive}>
        <StyledButtonWrapper>
          <SMIcon iconColour="primary" size="extraLarge" name={icon} />
        </StyledButtonWrapper>
      </StyledNeuShadowContainer>
    </StyledPressable>
  );
};
