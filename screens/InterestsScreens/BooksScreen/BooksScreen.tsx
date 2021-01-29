import React from "react";
import { FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenLayout, Divider, OpenModalButton } from "components";
import { InterestsContainer, InterestsProps } from "containers";
import { booksListData, screenInfo } from "./booksListData";
import { SCREENS } from "../../../constants";
import { RootStackParamList } from "../../../navigation/RootStack";

type BookNavigationProp = StackNavigationProp<RootStackParamList>;

export type BookScreenProps = {
  navigation: BookNavigationProp;
};
type ItemProps = { item: InterestsProps };

export const BooksScreen = ({ navigation }: BookScreenProps) => {
  const bookList = ({ item }: ItemProps) => (
    <InterestsContainer
      title={item.title}
      creator={item.creator}
      type={item.type}
      moreInfo={item.moreInfo}
    />
  );
  return (
    <ScreenLayout>
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <FlatList
          data={booksListData}
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
