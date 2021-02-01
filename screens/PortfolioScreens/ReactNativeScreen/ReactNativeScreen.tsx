import React from "react";
import { FlatList } from "react-native";
import {
  ScreenLayout,
  Divider,
  StyledBaseText,
  LoadingSpinner,
} from "components";
import { PortfolioContainer } from "containers";
import {
  screenInfo,
  ReactNativeScreenDataProps,
  reactNativeProjects,
} from "./reactNativeScreenData";
import { useQuery } from "urql";

type ItemProps = { item: ReactNativeScreenDataProps };

export const ReactNativeScreen = () => {
  const [{ data, fetching, error }] = useQuery({
    query: reactNativeProjects,
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
  console.log("💃🏿", data);
  const portfolioCard = ({ item }: ItemProps) => (
    <PortfolioContainer
      headerTitle={item.headerTitle}
      headerBody={item.headerBody}
      headerFooter={item.headerFooter}
      cardBodyText={item.cardBodyText}
      buttonOptionOne={item.buttonOptionOne}
      buttonOptionTwo={item.buttonOptionTwo}
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
