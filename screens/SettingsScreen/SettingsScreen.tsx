import React from "react";
import { ScreenLayout, Divider, UnicornButton } from "components";
import { ThemeModeSwitch } from "../../components/ThemeModeSwitch/ThemeModeSwitch";
// import { PortfolioContainer } from "containers";

// type ItemProps = { item: ReactScreenDataProps };

const screenInfo = `Do you believe in magic?
Well, that’s great, you’ll love this... every time you press the button below, a unicorn is born! 🦄`;
const title = "Settings";
export const SettingsScreen = () => {
  // const portfolioCard = ({ item }: ItemProps) => (
  //   <PortfolioContainer
  //     headerTitle={item.headerTitle}
  //     headerBody={item.headerBody}
  //     headerFooter={item.headerFooter}
  //     cardBodyText={item.cardBodyText}
  //   />
  // );
  return (
    <ScreenLayout>
      <ScreenLayout.Header title={title} />
      <ScreenLayout.Info infoText={screenInfo} />
      <ScreenLayout.Body>
        <Divider />
        <UnicornButton />
        <ThemeModeSwitch />
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
