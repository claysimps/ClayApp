import { light } from "./light";
import { dark } from "./dark";
import { red } from "./red";

export interface ThemeProps {
  theme?: typeof light.theme | typeof dark.theme | typeof red.theme;
}
