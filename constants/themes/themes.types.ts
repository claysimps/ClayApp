import { light } from "./light";
import { dark } from "./dark";
import { pink } from "./pink";

export interface ThemeProps {
  theme?: typeof light.theme | typeof dark.theme | typeof pink.theme;
}
