import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Layout } from "../../constants";

export const StyledScrollView = styled(ScrollView)`
  flex: 1;
  width: ${Layout.content.width}px;
`;

export const StyledContentWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
`;
