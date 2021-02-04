import React from "react";
import {
  StyledModalContainer,
  StyledModalWrapper,
  StyledNeuShadow,
} from "./Modal.styles";

export interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => (
  <StyledModalContainer>
    <StyledModalWrapper>
      <StyledNeuShadow>{children}</StyledNeuShadow>
    </StyledModalWrapper>
  </StyledModalContainer>
);
