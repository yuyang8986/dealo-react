import React from "react";
import * as Styled from "./StyledCollections";
import { Collection } from "../../models/Collection";
import { TitleBlueH3 } from "../styledComponents/h3-title";
import CollectionImg from "../../assets/images/collection.svg";

export interface IProps {
  item: Collection;
}

const CollectionItem = ({ item }: IProps) => {
  return (
    <Styled.CollectionItemContainerDiv data-testid={item.id}>
      <Styled.CollectionItemFolderIconDiv>
        <img src={CollectionImg} alt="collection" />
      </Styled.CollectionItemFolderIconDiv>
      <Styled.CollectionItemContentDiv>
        <TitleBlueH3>{item.name}</TitleBlueH3>
        <Styled.CollectionItemDescrptionP>
          {`by ${item.creator} - ${item.items.length} items - Updated: ${item.lastUpdated}`}
        </Styled.CollectionItemDescrptionP>
      </Styled.CollectionItemContentDiv>
    </Styled.CollectionItemContainerDiv>
  );
};

export default CollectionItem;
