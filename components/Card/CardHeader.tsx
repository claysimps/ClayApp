import React from "react";
import { StyledCardHeader } from "./Card.styles";
import { CardProps } from "./Card.types";

export const CardHeader = ({ children }: CardProps) => (
  <StyledCardHeader>{children}</StyledCardHeader>
);
