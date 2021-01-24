import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";

VectorIcon.loadFont();

export const StyledVectorIcon = styled(VectorIcon)`
  color: ${(props) => props.theme.primary};
`;
