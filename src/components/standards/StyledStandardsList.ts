import { GreyTextSmallP } from './../styledComponents/p';
import styled from "styled-components";

export const StandardsListContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StandardItemItemContainerDiv = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid rgb(211, 214, 219);
`;

export const StandardItemTypeDiv = styled(GreyTextSmallP)`
  font-weight: 500;
`;

export const StandardItemStatusAndButtonContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;

export const StandardItemButtonAndActionContainerDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StandardItemActionsIconDiv = styled.div`
  transform: rotate(90deg);
  margin-left: 0.8rem;
`;
