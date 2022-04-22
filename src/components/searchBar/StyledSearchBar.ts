import styled from "styled-components";

export const SearchButtonDiv = styled.div`
  background-color: rgb(230, 230, 230);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  padding: 1.25rem;
`;

export const SearchPlaceHolderTextDiv = styled.div`
  padding: 1rem;
  overflow: hidden;
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const QuickSearchInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  background-color: ${props=>props.theme.colors.greyBackgroundColor};
  flex: 1;
  margin-bottom: 1rem;
  color: rgb(135, 140, 145);
`;