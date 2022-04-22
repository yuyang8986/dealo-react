import styled from 'styled-components';

export const DealInfoWrapper = styled.div`
  background: #f0eded;
  padding: 20px 25px;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const InfoText = styled.p<{ mb?: number; mt?: number }>`
  font-size: 18px;
  color: #000;
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : 'initial')};
  margin-top: ${(props) => (props.mt ? props.mt + 'px' : 'initial')};
`;

export const CompanyName = styled.h2`
  font-size: 30px;
  margin-bottom: 15px;
`;

export const HeaderTitle = styled.h4`
  font-size: 20px;
  color: #000;
  text-align: center;
  margin-bottom: 25px;
`;
export const DealsWrapper = styled.div`
  margin-top: 30px;
`;
