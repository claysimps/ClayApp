import React from "react";
import { FlatList } from "react-native";
import { ScreenLayout, Divider, StyledBaseText } from "components";
import { PortfolioContainer } from "containers";
import {
  screenInfo,
  backendProjects,
  BackendScreenDataProps,
} from "./backendScreenData";
import { useQuery } from "urql";

type ItemProps = { item: BackendScreenDataProps };

export const BackendScreen = () => {
  const [{ data, fetching, error }] = useQuery({
    query: backendProjects,
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
