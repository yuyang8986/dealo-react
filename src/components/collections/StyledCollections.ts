import styled from "styled-components";
import device from "../../utils/device";

export const CollectionsListContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionItemContainerDiv = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid rgb(211, 214, 219);
  display: flex;
`;

export const CollectionItemContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionItemFolderIconDiv = styled.div`
  background-color: rgb(197, 208, 227, 0.5);
  padding: 0.7rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  height: 3.2rem;

  @media ${device.tabletMax} {
    padding: 0.1rem 0.1rem;
    height: 2rem;
  }

  img {
    width: 1.5rem;
  }
`;

export const CollectionItemTitleH3 = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.h3titleColor};
  font-weight: 500;
`;

export const CollectionItemDescrptionP = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
`;
