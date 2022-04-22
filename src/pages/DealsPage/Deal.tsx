import React from 'react';
import { FaEllipsisV, FaStar } from 'react-icons/fa';
import { DealText, DealWrapper } from './StyledDeal';

interface Props {
  dealName: string;
  name: string;
  amount: Number;
  contact: string;
  click: Function;
  id: string;
}

const Deal = ({ dealName, name, amount, contact, click, id }: Props) => {
  return (
    <DealWrapper onClick={() => click(id)}>
      <div>
        <DealText>{dealName}</DealText>
        <DealText>{name}</DealText>
        <DealText>{`$${amount}`}</DealText>
        <DealText>Contact: {contact}</DealText>
      </div>
      <div>
        <p className='m-0'>
          <FaStar color='#C4C4C4' />
        </p>
        <p className='m-0'>
          <FaEllipsisV color='#C4C4C4' />
        </p>
      </div>
    </DealWrapper>
  );
};

export default Deal;
