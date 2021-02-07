import React from "react";
import {
  StyledNeuShadowContainer,
  StyledButtonWrapper,
  StyledProfileHeaderText,
  StyledView,
} from "./HomeScreenLinksContainer.styles";
import { ButtonRound } from "components";
import { contactIconDetails, contactIcons } from "./iconDetails";
import { SCREENS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

export const HomeScreenLinksContainer = () => {
  const { navigate } = useNavigation();
  const handlePress = (url: string, title: string) => {
    if (title === "Contact") {
      navigate(SCREENS.ContactModal);
    } else {
      navigate(SCREENS.WebviewModal, {
        url: url,
        screenTitle: title,
      });
    }
  };

  return (
    <StyledView>
      <StyledProfileHeaderText fontWeight="black">
        Links
      </StyledProfileHeaderText>

      <StyledNeuShadowContainer>
        <StyledButtonWrapper>
          {contactIcons.map((action, index) => {
            const { icon, url, title } = contactIconDetails[action];
            return (
              <ButtonRound
                onPress={() => handlePress(url, title)}
                key={index}
                icon={icon}
                title={title}
              />
            );
          })}
        </StyledButtonWrapper>
      </StyledNeuShadowContainer>
    </StyledView>
  );
};
