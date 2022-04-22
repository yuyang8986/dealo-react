import React from "react";
import * as Styled from "./StyledRecentlyAccess";
import Tabs from "../../components/tabs/index";
import { ITabItem } from "../../components/tabs/ITabItem";
import StandardsList from "../../components/standards/standards-list";
import CollectonList from "../../components/collections/collection-list";

const RecentlyAccess = () => {
  const items: ITabItem[] = [
    {
      title: "Standards",
      content: <StandardsList/>,
    },
    {
      title: "Collections",
      content: <CollectonList/>,
    },
  ];
  return (
    <Styled.RecentlyAccessContentContainerDiv>
      <Styled.TitleTextH3>Recently accessed</Styled.TitleTextH3>
      <Tabs items={items} />
    </Styled.RecentlyAccessContentContainerDiv>
  );
};

export default RecentlyAccess;
