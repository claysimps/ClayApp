import React from "react";
import { ScreenLayout, Divider } from "components";
import { useSelector } from "react-redux";
import { getInputValue } from "../../selectors";
import { PortfolioContainer } from "../../containers";
import { TextInput } from "react-native-gesture-handler";

const infoText = ` Thanks for checking out ClayApp, THE app for all things Clayton! Have
a look around, I’m sure you’ll agree, that Clayton is an amazing dude;
with energy and drive by the bucket load! 😉`;
export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <ScreenLayout.Header title="Home" />
      <ScreenLayout.Info infoText={infoText} />
      <ScreenLayout.Body>
        <Divider />
        {/* <PortfolioContainer /> */}
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
