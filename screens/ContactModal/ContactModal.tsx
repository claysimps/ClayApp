import React from "react";
import { RootStackParamList } from "navigation/RootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { Modal, Button, StyledBaseText } from "components";

import { SCREENS, Layout } from "../../constants";
import {
  StyledContactModalView,
  StyledTextWrapper,
  StyledButtonWrapper,
} from "./ContactModal.styles";

type ContactModalStackProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.ContactModal
>;
export interface ContactModalProps {
  navigation: ContactModalStackProp;
}

export const ContactModal = ({ navigation }: ContactModalProps) => {
  return (
    <Modal size={Layout.cardSize.width}>
      <StyledContactModalView>
        <StyledTextWrapper>
          <StyledBaseText size={28} fontWeight="black">
            Clayton Francis
          </StyledBaseText>
        </StyledTextWrapper>

        <StyledTextWrapper>
          <StyledBaseText size={22}>claysimps@gmail.com</StyledBaseText>
        </StyledTextWrapper>

        <StyledTextWrapper>
          <StyledBaseText size={28}>07868 021 240</StyledBaseText>
        </StyledTextWrapper>

        <StyledButtonWrapper>
          <Button title="Back" onPress={() => navigation.pop()} />
        </StyledButtonWrapper>
      </StyledContactModalView>
    </Modal>
  );
};
