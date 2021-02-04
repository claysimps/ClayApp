import React from "react";
import { FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { ScreenLayout, Divider, OpenModalButton } from "components";
import { InterestsContainer } from "containers";
import { screenInfo } from "./booksListData";
import { SCREENS } from "../../../constants";
import { RootStackParamList } from "../../../navigation/RootStack";
import { BookPayload, useGetBooksQuery } from "../../../graphql/generated/gql";

type BookNavigationProp = StackNavigationProp<RootStackParamList>;

export type BookScreenProps = {
  navigation: BookNavigationProp;
};
type ItemProps = { item: BookPayload };

export const BooksScreen = ({ navigation }: BookScreenProps) => {
  const [{ data }] = useGetBooksQuery({
    variables: { queryType: "book" },
  });
  if (!data) {
    return null;
  }
  const handleWebView = (bookUrl: string, title: string) => {
    navigation.navigate(SCREENS.WebviewModal, {
      url: bookUrl,
      screenTitle: title,
    });
  };
  const bookList = ({ item }: ItemProps) => (
    <InterestsContainer
      title={item.title}
      author={item.author}
      classification={item.classification}
      bookUrl={item.bookUrl}
      synopsis={item.synopsis}
      onPress={() => handleWebView(item.bookUrl, item.title)}
    />
  );

  return (
    <ScreenLayout>
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <FlatList
          data={data.getBooks}
          renderItem={bookList}
          keyExtractor={(item) => item.id}
        />
        <OpenModalButton
          onPress={() => navigation.navigate(SCREENS.BookSuggestionModal)}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
