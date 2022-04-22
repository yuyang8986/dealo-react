import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import {
  AllItems,
  Choose,
  ChooseText,
  ChooseTitle,
  ChoseItemWrapper,
} from '../styledAddDeal';

interface Props {
  select: Function;
  value: string;
}
const ChoosePerson = (props: Props) => {
  const persons = useAppSelector((state) => state.persons.all);

  const { select, value } = props;

  return (
    <Choose>
      <ChooseTitle>Select Person From List</ChooseTitle>
      <AllItems>
        {persons.map((person: any) => (
          <SingleItem
            key={Math.random()}
            name={person.name}
            address={person.location}
            id={person.id}
            setValue={select}
            isActive={person.id === value}
          />
        ))}
      </AllItems>
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

export default ChoosePerson;
