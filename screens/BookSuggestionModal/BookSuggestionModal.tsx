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
  StyledBookSuggestionView,
} from "./BookSuggestionModal.styles";
import { SCREENS } from "../../constants";
import { Alert } from "react-native";
import { useAddBookMutation } from "../../graphql/generated";

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
  const { title, author, classification, bookUrl, synopsis } = useSelector(
    getInputValue,
  );
  const [{ error }, addBook] = useAddBookMutation();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const result = await addBook({
        BookInput: {
          queryType: "book",
          title,
          author,
          classification,
          bookUrl,
          synopsis,
        },
      });
      if (error) {
        console.log(error);
        return Alert.alert("Huh, something went wrong...  please try again!");
      }
      if (result.data?.addBook.successMessage) {
        return Alert.alert("Thanks for the suggestion! 🥰");
      }
    } catch (err) {
      throw new Error(err);
    }
    navigation.pop();
  };

  return (
    <Modal>
      <StyledBookSuggestionView>
        <StyledInputTitleWrapper>
          <StyledInputTitle>Title</StyledInputTitle>
        </StyledInputTitleWrapper>
        <TextInput
          value={title}
          fieldName="title"
          placeholder="Book Title"
          autoFocus={true}
        />
        <StyledInputTitleWrapper>
          <StyledInputTitle>Author</StyledInputTitle>
        </StyledInputTitleWrapper>
        <TextInput value={author} fieldName="author" placeholder="Author" />
        <StyledInputTitleWrapper>
          <StyledInputTitle>Type</StyledInputTitle>
        </StyledInputTitleWrapper>
        <TextInput
          value={classification}
          fieldName="classification"
          placeholder="e.g. Business"
        />
        <StyledInputTitleWrapper>
          <StyledInputTitle>Web Link</StyledInputTitle>
        </StyledInputTitleWrapper>
        <TextInput value={bookUrl} fieldName="bookUrl" placeholder="www." />
        <StyledInputTitleWrapper>
          <StyledInputTitle>Description</StyledInputTitle>
        </StyledInputTitleWrapper>
        <TextInput
          multiline
          multi
          numberOfLines={10}
          value={synopsis}
          fieldName="synopsis"
          placeholder="Why should I read it?"
        />
        <StyledButtonWrapper>
          <Button title="Back" onPress={() => navigation.pop()} />
          <Button ctaButton title="Submit" onPress={handleSubmit} />
        </StyledButtonWrapper>
      </StyledBookSuggestionView>
    </Modal>
  );
};
