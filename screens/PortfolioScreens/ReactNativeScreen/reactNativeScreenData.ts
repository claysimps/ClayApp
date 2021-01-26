import { PortfolioCardProps } from "../../../containers";

export interface ReactNativeScreenDataProps extends PortfolioCardProps {
  id: string;
}

export const screenInfo =
  "Here, you will find a list of React Native projects that I’ve built or worked on, along with more information and and further options. ";

export const reactNativeScreenData: Array<ReactNativeScreenDataProps> = [
  {
    id: "calculator",
    headerTitle: "Cool Calculator",
    headerBody: "TypeScript",
    headerFooter: "Bare bones React Native app",
    cardBodyText:
      "A calculator with an Easter egg (hidden theme), built with Styled Components Redux Toolkit.",
  },
  {
    id: "responsiveThemeExample",
    headerTitle: "Responsive Theme Example",
    headerBody: "TypeScript",
    headerFooter: "Bare bones React Native app",
    cardBodyText:
      "A basic example of how to build a responsive theme with Redux Toolkit; built to accompany an article.",
  },
  {
    id: "clayApp",
    headerTitle: "Clay App",
    headerBody: "TypeScript",
    headerFooter: "Bare bones React Native app",
    cardBodyText:
      "Personal portfolio app utilising commonly used frontend mobile technologies, e.g. React Navigation, RTK, & graphQl.",
  },
];
