import React from "react";
import { FlatList } from "react-native";
import { useQuery } from "urql";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  ScreenLayout,
  Divider,
  OpenModalButton,
  StyledBaseText,
} from "components";
import { InterestsContainer } from "containers";
import { getBooksList, screenInfo, BooksListDataProps } from "./booksListData";
import { SCREENS } from "../../../constants";
import { RootStackParamList } from "../../../navigation/RootStack";

type BookNavigationProp = StackNavigationProp<RootStackParamList>;

export type BookScreenProps = {
  navigation: BookNavigationProp;
};
type ItemProps = { item: BooksListDataProps };

export const BooksScreen = ({ navigation }: BookScreenProps) => {
  const [{ data, fetching, error }] = useQuery({
    query: getBooksList,
  });
  if (fetching) {
    return null;
  }
  if (error) {
    return (
      <StyledBaseText>
        Huh, something went wrong... {error.message}
      </StyledBaseText>
    );
  }

  const handleWebView = (bookUrl: string, title: string) => {
    navigation.navigate(SCREENS.WebviewModal, {
      bookUrl: bookUrl,
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
          data={data.getAllBooks}
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

/**  {webView ? (
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <FlatList
          data={data.getAllBooks}
          renderItem={bookList}
          keyExtractor={(item) => item.id}
        />
        <OpenModalButton
          onPress={() => navigation.navigate(SCREENS.BookSuggestionModal)}
        />
     </ScreenLayout.Body>
     ) : (  <Webview
     style={{ marginTop: 20 }}
     source={{ uri: website }}
   />
   )}

         ) : (
        <Webview source={{ uri: website }} />
      )}
    </>

    */
