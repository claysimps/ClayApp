import React, { useState, useCallback } from "react";
import {
  StyledPressable,
  StyledNeuShadow,
  StyledButtonText,
} from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = ({ ctaButton, title, onPress }: ButtonProps) => {
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
      <StyledNeuShadow pressed={isActive} ctaButton={ctaButton}>
        <StyledNeuShadow ctaButton={ctaButton}>
          <StyledButtonText ctaButton={ctaButton}>{title}</StyledButtonText>
        </StyledNeuShadow>
      </StyledNeuShadow>
    </StyledPressable>
  );
};
