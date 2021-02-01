import { PortfolioCardProps } from "../../../containers";

export interface BackendScreenDataProps extends PortfolioCardProps {
  id: string;
}

export const screenInfo =
  "Here, you will find my backend projects, along with more information and and further options. ";

export const backendProjects = `
query {
  getAllProjectsByType(data: "backendProject") {
    id
    headerTitle
    headerBody
    headerFooter
    cardBodyText
    buttonOptionOne
    buttonOptionTwo
  }
}
`;
