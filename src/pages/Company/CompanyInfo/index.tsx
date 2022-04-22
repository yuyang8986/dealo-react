import React from 'react';
import {
  CompanyName,
  DealInfoWrapper,
  HeaderTitle,
  InfoText,
  DealsWrapper,
} from './companyInfoStyled';

interface PropsData {
  data: any;
}

const CompanyInfo = ({ data }: PropsData) => {
  const { name, phone, email, location } = data;
  return (
    <div>
      <HeaderTitle>Company Information</HeaderTitle>
      <div>
        <CompanyName>{name}</CompanyName>
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
      <div
        className='map'
        style={{ minHeight: 100, border: '1px solid black' }}
      ></div>
    </div>
  );
};

export default CompanyInfo;
