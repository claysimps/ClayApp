import React from "react";
import { FlatList } from "react-native";
import { ScreenLayout, Divider } from "components";
import { PortfolioBodyContainer, PortfolioCardProps } from "containers";
import { reactNativeScreenData, screenInfo } from "./reactNativeScreenData";

type ItemProps = { item: PortfolioCardProps };

export const ReactNativeScreen = () => {
  const portfolioCard = ({ item }: ItemProps) => (
    <PortfolioBodyContainer
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
          data={reactNativeScreenData}
          renderItem={portfolioCard}
          keyExtractor={(item) => item.id}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
