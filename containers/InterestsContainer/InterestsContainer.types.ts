import { StyledInterestsContainerProps } from "./InterestsContainer.styles";

export interface InterestsProps extends StyledInterestsContainerProps {
  title: string;
  author: string;
  classification?: string;
  synopsis?: string;
  bookUrl: string;
  onPress: () => void;
}
