import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import {
  Choose,
  ChooseText,
  ChooseTitle,
  ChoseItemWrapper,
} from '../styledAddDeal';

interface Props {
  select: Function;
  value: string;
}
const ChooseCompany = (props: Props) => {
  const companies = useAppSelector((state) => state.company.all);

  const { select, value } = props;

  return (
    <Choose>
      <ChooseTitle>Select Company From List</ChooseTitle>
      <div style={{ overflowY: 'auto', maxHeight: '80vh' }}>
        {companies.map((company: any) => (
          <SingleItem
            key={Math.random()}
            name={company.name}
            address={company.location}
            id={company.id}
            setValue={select}
            isActive={company.id === value}
          />
        ))}
      </div>
    </Choose>
  );
};

interface ItemProps {
  name: string;
  address: string;
  id: string;
  setValue: Function;
  isActive: boolean;
}

const SingleItem = ({ name, address, id, setValue, isActive }: ItemProps) => {
  return (
    <ChoseItemWrapper onClick={() => setValue(id)} isActive={isActive}>
      <ChooseText>Company: {name}</ChooseText>
      <ChooseText>Address: {address}</ChooseText>
    </ChoseItemWrapper>
  );
};

export default ChooseCompany;
