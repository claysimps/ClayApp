import React from "react";
import { ScreenLayout, Divider } from "components";
import {
  HomeScreenProfileContainer,
  HomeScreenBulletPointContainer,
  HomeScreenLinksContainer,
} from "containers";
import { StyledScrollView, StyledContentWrapper } from "./HomeScreen.styles";

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
        <StyledContentWrapper>
          <HomeScreenLinksContainer />
          <StyledScrollView>
            <HomeScreenProfileContainer />
            <HomeScreenBulletPointContainer />
          </StyledScrollView>
        </StyledContentWrapper>
      </ScreenLayout.Body>
    </ScreenLayout>
  );
};
