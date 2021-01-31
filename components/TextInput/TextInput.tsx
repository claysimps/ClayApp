import React from "react";
import { useAppDispatch } from "hooks";
import {
  StyledTextInput,
  StyledInputWrapper,
  StyledScrollView,
} from "./TextInput.styles";
import { setInputValues } from "../../state";
import { InputProps } from "./TextInput.types";

export const TextInput = ({
  value,
  fieldName,
  placeholder,
  autoFocus,
  textColor,
  multi,
}: InputProps) => {
  const dispatch = useAppDispatch();

  const onChangeText = () => {
    dispatch(
      setInputValues({
        value,
        fieldName,
      }),
    );
  };
  return (
    <StyledInputWrapper multi={multi}>
      {(multi && (
        <StyledScrollView>
          <StyledTextInput
            multiline
            editable
            maxLength={500}
            value={value}
            fieldName={fieldName}
            placeholder={placeholder}
            autoFocus={autoFocus}
            textColor={textColor}
            onChangeText={onChangeText}
          />
        </StyledScrollView>
      )) || (
        <StyledTextInput
          multiline
          editable
          maxLength={500}
          value={value}
          fieldName={fieldName}
          placeholder={placeholder}
          autoFocus={autoFocus}
          textColor={textColor}
          onChangeText={onChangeText}
        />
      )}
    </StyledInputWrapper>
  );
};
