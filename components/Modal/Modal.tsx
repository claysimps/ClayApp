import React from "react";
import {
  StyledModalContainer,
  StyledModalWrapper,
  StyledNeuShadow,
} from "./Modal.styles";

export interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <StyledModalContainer>
      <StyledModalWrapper>
        <StyledNeuShadow>{children}</StyledNeuShadow>
      </StyledModalWrapper>
    </StyledModalContainer>
  );
};
