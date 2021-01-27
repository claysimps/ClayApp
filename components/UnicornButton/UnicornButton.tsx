import React, { useState, useCallback } from "react";
import {
  StyledNeuButtonShadow,
  StyledPressable,
  StyledTextWrapper,
  StyledUnicorn,
} from "./UnicornButton.styles";
import { UnicornButtonProps } from "./UnicornButton.types";

export const UnicornButton = ({ onPress }: UnicornButtonProps) => {
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
      onPress={onPress}>
      <StyledNeuButtonShadow>
        <StyledNeuButtonShadow press={isActive}>
          <StyledTextWrapper>
            <StyledUnicorn>🦄</StyledUnicorn>
          </StyledTextWrapper>
        </StyledNeuButtonShadow>
      </StyledNeuButtonShadow>
    </StyledPressable>
  );
};
