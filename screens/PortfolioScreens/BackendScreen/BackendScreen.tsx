import React from "react";
import { FlatList } from "react-native";
import { ScreenLayout, Divider } from "components";
import { PortfolioContainer } from "containers";

import { screenInfo } from "./backendScreenData";
import {
  useGetProjectsQuery,
  PortfolioPayload,
} from "../../../graphql/generated/gql";
import { RootStackNavigationProp } from "navigation";
import { SCREENS } from "../../../constants";

type ItemProps = { item: PortfolioPayload };

export const BackendScreen = ({ navigation }: RootStackNavigationProp) => {
  const [{ data }] = useGetProjectsQuery({
    variables: { queryType: "backendProject" },
  });
  if (!data) {
    return null;
  }

  const handleWebView = (title: string, webUrl?: string) => {
    navigation.navigate(SCREENS.WebviewModal, {
      url: webUrl,
      screenTitle: title,
    });
  };

  const portfolioCard = ({ item }: ItemProps) => (
    <PortfolioContainer
      id={item.id}
      headerTitle={item.headerTitle}
      headerBody={item.headerBody}
      headerFooter={item.headerFooter}
      cardBodyText={item.cardBodyText}
      buttonOptionOne={item.buttonOptionOne}
      buttonOptionTwo={item.buttonOptionTwo}
      buttonOneLink={item.buttonOneLink}
      buttonTwoLink={item.buttonTwoLink}
      onPressButtonOne={() =>
        handleWebView(item.headerTitle, item.buttonOneLink)
      }
      onPressButtonTwo={() =>
        handleWebView(item.headerTitle, item.buttonTwoLink)
      }
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
