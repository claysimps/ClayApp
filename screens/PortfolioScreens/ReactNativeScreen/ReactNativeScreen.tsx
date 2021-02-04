import React from "react";
import { FlatList, Alert } from "react-native";
import { ScreenLayout, Divider } from "components";
import { PortfolioContainer } from "containers";
import { screenInfo } from "./reactNativeScreenData";
import {
  useGetProjectsQuery,
  PortfolioPayload,
} from "../../../graphql/generated/gql";
import { SCREENS } from "../../../constants";
import { RootStackNavigationProp } from "navigation";
import { setThemeMode, ThemeModeEnum } from "state";
import AsyncStorage from "@react-native-community/async-storage";
import { useAppDispatch } from "hooks";

export type ItemProps = { item: PortfolioPayload };

const { PINK } = ThemeModeEnum;

export const ReactNativeScreen = ({ navigation }: RootStackNavigationProp) => {
  const dispatch = useAppDispatch();
  const [{ data }] = useGetProjectsQuery({
    variables: { queryType: "reactNativeProject" },
  });
  if (!data) {
    return null;
  }

  const setPinkModeTheme = async () => {
    await AsyncStorage.setItem("THEME", PINK);
    dispatch(setThemeMode(PINK));
  };

  const handleWebView = (title: string, webUrl?: string) => {
    const alertMessage = () => {
      Alert.alert(
        "You're previewing Clay App! 😀 Have you tried Unicorn mode yet?",

        "You should, it's magical! 🧞‍♀️",
        [
          {
            text: "Maybe later",
          },
          {
            text: "No thanks",
            onPress: () => Alert.alert("Meanie! 😝"),
            style: "cancel",
          },
          { text: "OK", onPress: setPinkModeTheme },
        ],
        { cancelable: false },
      );
    };
    const openWebview = () => {
      navigation.navigate(SCREENS.WebviewModal, {
        url: webUrl,
        screenTitle: title,
      });
    };
    title === "Clay App" && webUrl === null ? alertMessage() : openWebview();
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
