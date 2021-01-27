import React from "react";
import { FlatList } from "react-native";
import { ScreenLayout, Divider } from "components";
import { PortfolioContainer } from "containers";
import {
  reactScreenData,
  screenInfo,
  ReactScreenDataProps,
} from "./reactScreenData";

type ItemProps = { item: ReactScreenDataProps };

export const ReactScreen = () => {
  const portfolioCard = ({ item }: ItemProps) => (
    <PortfolioContainer
      headerTitle={item.headerTitle}
      headerBody={item.headerBody}
      headerFooter={item.headerFooter}
      cardBodyText={item.cardBodyText}
    />
  );
  return (
    <ScreenLayout>
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <FlatList
          data={reactScreenData}
          renderItem={portfolioCard}
          keyExtractor={(item) => item.id}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
