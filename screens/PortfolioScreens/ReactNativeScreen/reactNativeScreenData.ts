import { PortfolioCardProps } from "../../../containers";

export interface ReactNativeScreenDataProps extends PortfolioCardProps {
  id: string;
}

export const reactNativeProjects = `
query {
  getAllProjectsByType(data: "reactProject") {
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

export const screenInfo =
  "Here, you will find a list of React Native projects that I’ve built or worked on, along with more information and further options. ";
