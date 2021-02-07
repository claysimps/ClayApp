import React from "react";
import {
  StyledModalContainer,
  StyledModalWrapper,
  StyledNeuShadow,
} from "./Modal.styles";

export interface ModalProps {
  children: React.ReactNode;
  size: number;
}

export const Modal = ({ children, size }: ModalProps) => (
  <StyledModalContainer>
    <StyledModalWrapper>
      <StyledNeuShadow size={size}>{children}</StyledNeuShadow>
    </StyledModalWrapper>
  </StyledModalContainer>
);
