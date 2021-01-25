import React from "react";
import { StyledCardProps } from "./Card.styles";

export type CardOnChangeParams = { isActive: boolean; id: string };
export type CardOnChangeType = (params: CardOnChangeParams) => void;
export interface CardProps extends StyledCardProps {
  children?: React.ReactNode;
  title?: string;
  fill?: boolean;
}
