import React, { useState } from "react";
import { FlatList } from "react-native";
import { useQuery } from "urql";
import { StackNavigationProp } from "@react-navigation/stack";
import Webview from "react-native-webview";
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
  const [webView, setViewState] = useState(false);
  const [website, setTargetSite] = useState("");
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

  const handleWebView = (bookUrl: string) => {
    setTargetSite(bookUrl);
    setViewState((web) => !web);
  };
  const bookList = ({ item }: ItemProps) => (
    <InterestsContainer
      title={item.title}
      author={item.author}
      classification={item.classification}
      bookUrl={item.bookUrl}
      synopsis={item.synopsis}
      onPress={() => handleWebView(item.bookUrl)}
    />
  );

  return (
    <>
      {!webView ? (
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
      ) : (
        <Webview source={{ uri: website }} />
      )}
    </>
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
   )} */
