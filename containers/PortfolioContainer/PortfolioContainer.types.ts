import { PortfolioPayload } from "../../graphql/generated/gql";

export interface PortfolioContainerProps extends PortfolioPayload {
  onPressButtonOne: () => void;
  onPressButtonTwo: () => void;
}
