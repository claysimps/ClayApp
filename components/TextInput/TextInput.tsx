import React from "react";
import { useAppDispatch } from "hooks";
import { StyledTextInput, StyledInputWrapper } from "./TextInput.styles";
import { setInputValues } from "../../state";
import { InputProps } from "./TextInput.types";

export const TextInput = ({
  value,
  fieldName,
  placeholder,
  autoFocus,
  textColor,
}: InputProps) => {
  const dispatch = useAppDispatch();

  const onChangeText = (value: string) => {
    dispatch(
      setInputValues({
        value,
        fieldName,
      }),
    );
  };
  return (
    <StyledInputWrapper>
      <StyledTextInput
        value={value}
        fieldName={fieldName}
        placeholder={placeholder}
        autoFocus={autoFocus}
        textColor={textColor}
        onChangeText={onChangeText}
      />
    </StyledInputWrapper>
  );
};
