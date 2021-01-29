import React, { FC } from "react";
import { Icon } from "../Icon";
import {
  StyledTabBarShadow,
  StyledDetailWrapper,
  StyledButtonText,
  StyledNeuShadow,
  StyledPressable,
} from "./BottomTabsBar.styles";
import { BottomTabsBarProps } from "./BottomTabsBar.types";
import { iconDetails } from "./iconDetails";

export const BottomTabsBar: FC<BottomTabsBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <StyledTabBarShadow>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const { iconName } = iconDetails[index];
          const label =
            options.title !== undefined ? options.title : route.name;
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
          const iconColour = isFocused ? "tabIconSelected" : "tabIconDefault";
          const iconSize = isFocused ? "extraLarge" : "medium";
          return (
            <StyledPressable
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}>
              <StyledNeuShadow bulb={isFocused}>
                <StyledDetailWrapper>
                  <Icon
                    iconColour={iconColour}
                    key={index}
                    name={iconName}
                    size={iconSize}
                  />
                  <StyledButtonText isActive={isFocused}>
                    {label}
                  </StyledButtonText>
                </StyledDetailWrapper>
              </StyledNeuShadow>
            </StyledPressable>
          );
        })}
      </StyledTabBarShadow>
    </>
  );
};
