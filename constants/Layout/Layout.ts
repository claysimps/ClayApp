import { Dimensions } from "react-native";

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

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
    width: width * 0.85,
  },
  button: {
    width: width * 0.8,
    half: width * 0.28,
    height: height * 0.04,
  },
  roundButton: {
    small: height * 0.06,
    large: height * 0.075,
  },
  input: {
    width: width * 0.75,
    height: height * 0.04,
    multiline: height * 0.2,
  },
  cardSize: {
    width: width * 0.75,
    height: height * 0.3,
  },
  modalSize: {
    width: width * 0.86,
    height: height * 0.87,
  },
};
