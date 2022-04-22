import React from "react";
import { Collection } from "../../models/Collection";
import * as Styled from "./StyledCollections";
import CollectItem from "./collection-item"

const CollectionList = () => {
  const items: Collection[] = [
    {
      id: 1,
      name: "Frequently Used",
      creator: "You",
      lastUpdated: "15/08",
      items: [
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
      ],
    },
    {
      id: 2,
      name: "115 George St Construction",
      creator: "Alvin Cheng",
      lastUpdated: "15/08",
      items: [
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
      ],
    },
  ];
  return (
    <Styled.CollectionsListContainerDiv>
      {items.map((item) => {
          return <CollectItem item={item} key={item.id}/>
      })}
    </Styled.CollectionsListContainerDiv>
  );
};

export default CollectionList;
