import styled from "styled-components/native";
import UnorderedList from "react-native-unordered-list";
import { StyledBaseText } from "components";

export const StyledBulletPointContainer = styled.View`
  flex: 1;
`;

export const StyledBulletPointWrapper = styled.View`
  flex: 1;
`;

export const StyledBulletPointHeaderText = styled(StyledBaseText)`
  font-size: 28px;
  padding-top: 14px;
`;

export const StyledBulletPoint = styled(UnorderedList)`
  padding-bottom: 8px;
`;
