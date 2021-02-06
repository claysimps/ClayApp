import React from "react";
import { FlatList } from "react-native";

import { ScreenLayout, Divider, OpenModalButton } from "components";
import { InterestsContainer } from "containers";
import { screenInfo } from "./articlesListData";
import { SCREENS } from "../../../constants";
import { RootStackNavigationProp } from "navigation";

import {
  ArticlePayload,
  useGetArticlesQuery,
} from "../../../graphql/generated/gql";

type ItemProps = { item: ArticlePayload };

export const ArticlesScreen = ({ navigation }: RootStackNavigationProp) => {
  const [{ data }] = useGetArticlesQuery({
    variables: { queryType: "article" },
  });
  if (!data) {
    return null;
  }
  const handleWebView = (articleUrl: string, title: string) => {
    navigation.navigate(SCREENS.WebviewModal, {
      url: articleUrl,
      screenTitle: title,
    });
  };
  const articleList = ({ item }: ItemProps) => (
    <InterestsContainer
      title={item.title}
      author={item.publisher}
      bookUrl={item.articleUrl}
      synopsis={item.excerpt}
      onPress={() => handleWebView(item.articleUrl, item.title)}
    />
  );

  return (
    <ScreenLayout>
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <FlatList
          data={data.getArticles}
          renderItem={articleList}
          keyExtractor={(item) => item.id}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
