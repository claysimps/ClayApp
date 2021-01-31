import { createSelector } from "reselect";
import { RootState } from "../state";

export const getInputValue = createSelector(
  (state: RootState) => state,
  (state) => state.inputValue,
);
