import React from "react";
import { useSelector } from "react-redux";
import { getInputValue } from "selectors";
import { RootStackParamList } from "navigation/RootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { Modal, TextInput, Button } from "components";
import {
  StyledInputTitleWrapper,
  StyledInputTitle,
  StyledButtonWrapper,
} from "./BookSuggestionModal.styles";
import { SCREENS } from "../../constants";

type BookSuggestionModalStackProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.BookSuggestionModal
>;
export interface BookSuggestionModalProps {
  navigation: BookSuggestionModalStackProp;
}

export const BookSuggestionModal = ({
  navigation,
}: BookSuggestionModalProps) => {
  const { bookTitle, bookAuthor, bookType, description } = useSelector(
    getInputValue,
  );
  return (
    <Modal>
      <StyledInputTitleWrapper>
        <StyledInputTitle>Title</StyledInputTitle>
      </StyledInputTitleWrapper>
      <TextInput
        value={bookTitle}
        fieldName="bookTitle"
        placeholder="Title"
        autoFocus={true}
      />
      <StyledInputTitleWrapper>
        <StyledInputTitle>Author</StyledInputTitle>
      </StyledInputTitleWrapper>
      <TextInput
        value={bookAuthor}
        fieldName="bookAuthor"
        placeholder="Author"
      />
      <StyledInputTitleWrapper>
        <StyledInputTitle>Type</StyledInputTitle>
      </StyledInputTitleWrapper>
      <TextInput
        value={bookType}
        fieldName="bookType"
        placeholder="e.g. Business"
      />
      <StyledInputTitleWrapper>
        <StyledInputTitle>Description</StyledInputTitle>
      </StyledInputTitleWrapper>
      <TextInput
        multiline
        multi
        numberOfLines={10}
        value={description}
        fieldName="description"
        placeholder="Why should I read it?"
      />
      <StyledButtonWrapper>
        <Button title="Back" onPress={() => navigation.pop()} />
        <Button ctaButton title="Submit" />
      </StyledButtonWrapper>
    </Modal>
  );
};
