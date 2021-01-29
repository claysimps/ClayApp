import React from "react";
import { StyledModalPressable } from "./OpenModalButton.styles";
import { Icon } from "../Icon";

type OpenModalProps = {
  onPress: () => void;
};

export const OpenModalButton = ({ onPress }: OpenModalProps) => {
  return (
    <StyledModalPressable onPress={onPress}>
      <Icon iconColour="textOnColourBg" name="plus-thick" size="extraLarge" />
    </StyledModalPressable>
  );
};
