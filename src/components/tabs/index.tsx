import React, { useState } from "react";
import { ITabItem } from "./ITabItem";
import * as Styled from "./StyledTabs";

export interface IProps {
  items: ITabItem[];
}

const Tabs = ({ items }: IProps) => {
  const [selectedIndex, SetSelectedIndex] = useState<number>(0);
  return (
    <Styled.TabsWrapper>
      <Styled.TabsContainer>
        {items.map((item, index) => {
          return (
              <Styled.TabsTitleTextDiv
                isSelected={selectedIndex === index}
                onClick={() => {
                  SetSelectedIndex(index);
                }}
                key={index}
              >
                {item.title}
              </Styled.TabsTitleTextDiv>
          );
        })}
      </Styled.TabsContainer>
      {items[selectedIndex].content}
    </Styled.TabsWrapper>
  );
};

export default Tabs;
