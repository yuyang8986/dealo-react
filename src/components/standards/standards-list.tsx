import React from "react";
import { IStandardItem } from "../../models/StandardItem";
import StandardsItem from "./standards-item";
import * as Styled from "./StyledStandardsList";

const StandardsList = () => {
  const items: IStandardItem[] = [
    {
      id: 1,
      title: "AS-NZS 3800:2020",
      description:
        "Electrical Equipment for explosive atmopheres- Repair and overhaul (IEC 60079-19:2015)",
      publishDate: "17/07/1968",
      type: "Standard",
      status: "Current",
    },
    {
      id: 2,
      title: "AS-NZS 3800:2020",
      description:
        "Electrical Equipment for explosive atmopheres- Repair and overhaul (IEC 60079-19:2015)",
      publishDate: "17/07/1968",
      type: "Standard",
      status: "Current",
    },
  ];

  return (
    <Styled.StandardsListContainerDiv>
      {items.map((item) => {
        return <StandardsItem standardItem={item} key={item.id} />;
      })}
    </Styled.StandardsListContainerDiv>
  );
};

export default StandardsList;
