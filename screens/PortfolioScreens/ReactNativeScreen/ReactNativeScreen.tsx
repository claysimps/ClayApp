import React from "react";
import { FlatList } from "react-native";
import { ScreenLayout, Divider } from "components";
import { PortfolioContainer } from "containers";
import { screenInfo } from "./reactNativeScreenData";
import {
  useGetProjectsQuery,
  PortfolioPayload,
} from "../../../graphql/generated/gql";

type ItemProps = { item: PortfolioPayload };

export const ReactNativeScreen = () => {
  const [{ data }] = useGetProjectsQuery({
    variables: { queryType: "reactNativeProject" },
  });
  if (!data) {
    return null;
  }
  const portfolioCard = ({ item }: ItemProps) => (
    <PortfolioContainer
      id={item.id}
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
          data={data.getProjects}
          renderItem={portfolioCard}
          keyExtractor={(item) => item.id}
        />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
