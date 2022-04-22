import React from 'react';
import * as Styled from './StyledSummartItem';

interface Item {
  Icon: string;
  text: string;
  count: number;
}

const SummaryItem = ({ Icon, text, count }: Item) => {
  return (
    <Styled.SummaryItemMain>
      <Styled.IconWrapper className='icon'>{Icon}</Styled.IconWrapper>
      <Styled.ItemCount>{count}</Styled.ItemCount>
      <Styled.ItemText>{text}</Styled.ItemText>
    </Styled.SummaryItemMain>
  );
};

export default SummaryItem;
