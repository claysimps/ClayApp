import React from "react";
import { FlatList, View } from "react-native";
import { ScreenLayout, Divider } from "components";
import { InterestsContainer, InterestsProps } from "containers";
import { booksListData, screenInfo } from "./booksListData";

type ItemProps = { item: InterestsProps };

export const BooksScreen = () => {
  const bookList = ({ item }: ItemProps) => (
    <View>
      <InterestsContainer
        title={item.title}
        creator={item.creator}
        type={item.type}
        moreInfo={item.moreInfo}
      />
    </View>
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
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
