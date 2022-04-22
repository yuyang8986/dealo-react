import React from "react";
import { VscEllipsis } from "react-icons/vsc";
import { IStandardItem } from "../../models/StandardItem";
import * as Styled from "./StyledStandardsList";
import { PrimaryButton } from "../../components/button/index";
import { TitleBlueH3 } from "../styledComponents/h3-title";
import {
  GreyTextLargeP,
  BaseGreyTextP,
} from "../../components/styledComponents/p";

interface IProps {
  standardItem: IStandardItem;
}

const StandardsItem = ({ standardItem }: IProps) => {
  return (
    <Styled.StandardItemItemContainerDiv data-testid={standardItem.id}>
      <TitleBlueH3>{standardItem.title}</TitleBlueH3>
      <GreyTextLargeP>{standardItem.description}</GreyTextLargeP>
      <BaseGreyTextP>{`Published: ${standardItem.publishDate}`}</BaseGreyTextP>
      <Styled.StandardItemStatusAndButtonContainerDiv>
        <Styled.StandardItemTypeDiv>
          {`${standardItem.type} - ${standardItem.status}`}
        </Styled.StandardItemTypeDiv>
        <Styled.StandardItemButtonAndActionContainerDiv>
          <PrimaryButton>Open</PrimaryButton>
          <Styled.StandardItemActionsIconDiv>
            <VscEllipsis />
          </Styled.StandardItemActionsIconDiv>
        </Styled.StandardItemButtonAndActionContainerDiv>
      </Styled.StandardItemStatusAndButtonContainerDiv>
    </Styled.StandardItemItemContainerDiv>
  );
};

export default StandardsItem;
