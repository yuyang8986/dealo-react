import React from 'react';
import {
  PersonName,
  DealInfoWrapper,
  HeaderTitle,
  InfoText,
  DealsWrapper,
} from './personInfoStyled';

interface PropsData {
  data: any;
}

const PersonInfo = ({ data }: PropsData) => {
  const { name, phone, email, location } = data;
  return (
    <div>
      <HeaderTitle>Person Information</HeaderTitle>
      <div>
        <PersonName>{name}</PersonName>
        <InfoText mb={15}>Address: {location} </InfoText>
        <InfoText mb={15}>Email: {email} </InfoText>
        <InfoText mb={15}>Contact: {phone} </InfoText>
      </div>
      <DealsWrapper>
        <InfoText mb={10}>Deals</InfoText>
        <DealInfoWrapper>
          <InfoText>Name: Build App</InfoText>
          <InfoText>Amount: $1000.00</InfoText>
          <InfoText>Contact: Andy</InfoText>
          <InfoText>Stage: Won</InfoText>
        </DealInfoWrapper>
      </DealsWrapper>
    </div>
  );
};

export default PersonInfo;
