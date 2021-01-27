import styled from "styled-components/native";
import { Layout } from "../../constants";
import { StyledBaseText } from "../../components";

export const StyledInterestsListContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const StyledInterestsWrapper = styled.View`
  width: ${Layout.cardSize.width}px;
  padding: 5px 15px;
`;

export const StyledInterestsText = styled(StyledBaseText)`
  padding-bottom: 8px;
`;
