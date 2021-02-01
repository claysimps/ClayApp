import React from "react";
import { FlatList } from "react-native";
import {
  ScreenLayout,
  Divider,
  LoadingSpinner,
  StyledBaseText,
} from "components";
import { PortfolioContainer } from "containers";
import {
  reactProjects,
  screenInfo,
  ReactScreenDataProps,
} from "./reactScreenData";

import { useQuery } from "urql";

type ItemProps = { item: ReactScreenDataProps };

export const ReactScreen = () => {
  const [{ data, fetching, error }] = useQuery({
    query: reactProjects,
  });
  if (fetching) {
    return <LoadingSpinner isFetching={fetching} />;
  }
  if (error) {
    return (
      <StyledBaseText>
        Huh, something went wrong... {error.message}
      </StyledBaseText>
    );
  }
  const portfolioCard = ({ item }: ItemProps) => (
    <PortfolioContainer
      headerTitle={item.headerTitle}
      headerBody={item.headerBody}
      headerFooter={item.headerFooter}
      cardBodyText={item.cardBodyText}
      buttonOptionOne={item.buttonOptionOne}
    />
  );
  return (
    <ScreenLayout>
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <FlatList
          data={data.getAllProjectsByType}
          renderItem={portfolioCard}
          keyExtractor={(item) => item.id}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
