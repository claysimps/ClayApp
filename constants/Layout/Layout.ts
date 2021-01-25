import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export type LayoutProps = {
  Layout: [keyof typeof Layout];
};

export const Layout = {
  window: {
    width,
    height,
  },
  tabBar: {
    width,
    height: height * 0.1,
  },
  content: {
    width: width * 0.8,
  },
  button: {
    width: width * 0.8,
    half: width * 0.28,
    height: height * 0.04,
  },
  cardSize: {
    width: width * 0.8,
    height: height * 0.25,
  },
};
