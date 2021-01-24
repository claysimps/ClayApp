import React, { FC } from "react";

import {
  StyledNeuShadow,
  StyledTextWrapper,
  StyledTabText,
  StyledTopTabContainer,
  StyledPressable,
  StyledTopTabWrapper,
} from "./TopTabsBar.styles";
import { TopTabsBarProps } from "./TopTabsBar.types";

export const TopTabsBar: FC<TopTabsBarProps> = ({
  state,
  descriptors,
  navigation,
}) => (
  <StyledTopTabContainer>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label = options.title !== undefined ? options.title : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: "tabLongPress",
          target: route.key,
        });
      };

      return (
        <StyledTopTabWrapper key={index}>
          <StyledPressable
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}>
            <StyledNeuShadow bulb={!isFocused}>
              <StyledTextWrapper>
                <StyledTabText>{label}</StyledTabText>
              </StyledTextWrapper>
            </StyledNeuShadow>
          </StyledPressable>
        </StyledTopTabWrapper>
      );
    })}
  </StyledTopTabContainer>
);

/*
  const leftButton = state.index === 0;
  const rightButton = state.index === 1;

  <StyledTopTabWrapper key={index}>
 </StyledTopTabWrapper>
      leftTab={leftButton === isFocused}
      rightTab={rightButton === isFocused}
        */
