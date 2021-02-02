import { PortfolioCardProps } from "../../../containers";

export interface ReactScreenDataProps extends PortfolioCardProps {
  id: string;
}

export const reactProjects = `
query {
  getAllProjectsByType(data: "reactProject") {
    id
    headerTitle
    headerBody
    headerFooter
    cardBodyText
    buttonOptionOne
  }
}
`;

export const screenInfo = "Here, you will find a list of React projects that I’ve worked on, along with more information and further options. " as string;
