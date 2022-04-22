import React from 'react';
import {
  DealsWrapper,
  HeaderTitle,
  InfoText,
  InfoWrapper,
  Name,
} from './dealIfoStyled';

interface PropsData {
  name: string;
  contact: string;
  email: string;
  location: string;
  id: string;
}

const DealInfo = ({ name, contact, email, location }: PropsData) => {
  return (
    <div>
      <HeaderTitle>Deal Information</HeaderTitle>
      <div>
        <Name>{name}</Name>
        <InfoText mb={15}>Company: {location} </InfoText>
        <InfoText mb={15}>Email: {email} </InfoText>
        <InfoText mb={15}>Contact: {contact} </InfoText>
      </div>
      <DealsWrapper>
        <InfoText mb={20}>
          <b>Files:</b>
        </InfoText>
        <InfoWrapper>
          <InfoText bold>Invoice.docx</InfoText>
          <InfoText bold>Invoice.docx</InfoText>
          <InfoText bold>Invoice.docx</InfoText>
        </InfoWrapper>
      </DealsWrapper>
    </div>
  );
};

export default DealInfo;
