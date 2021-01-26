import React from "react";
import { FlatList } from "react-native";
import { ScreenLayout, Divider } from "components";
import { PortfolioContainer, PortfolioCardProps } from "containers";
import { backendScreenData, screenInfo } from "./backendScreenData";

type ItemProps = { item: PortfolioCardProps };

export const BackendScreen = () => {
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
          data={backendScreenData}
          renderItem={portfolioCard}
          keyExtractor={(item) => item.id}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
