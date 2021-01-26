import { font } from "./font";

export type FontProps = {
  fontWeight?: keyof typeof font.fontWeight;
};
