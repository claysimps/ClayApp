import { createSlice } from "@reduxjs/toolkit";

export type InputValues = {
  [key: string]: any;
};

const initialState: InputValues = {};

export const inputValues = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    setInputValues(
      state: InputValues,
      { payload }: { payload: { value: string; fieldName: string } },
    ) {
      const { value, fieldName } = payload;
      state[fieldName] = value;
    },
  },
});

export const { setInputValues } = inputValues.actions;
export default inputValues.reducer;
