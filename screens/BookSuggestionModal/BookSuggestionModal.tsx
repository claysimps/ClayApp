import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "react-native";
import { RootStackParamList } from "navigation/RootStack";
import {
  StyledModalContainer,
  StyledNeuShadow,
  StyledModalWrapper,
} from "./BookSuggestionModal.styles";

type BookNavigationProp = StackNavigationProp<RootStackParamList>;

export const BookSuggestionModal = () => (
  //   {
  //   navigation,
  // }: {
  //   navigation: BookNavigationProp;
  // }
  <StyledModalContainer>
    <StyledModalWrapper>
      <StyledNeuShadow>
        <Text>Hello world</Text>
      </StyledNeuShadow>
    </StyledModalWrapper>
  </StyledModalContainer>
);
