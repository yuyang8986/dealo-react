import styled from 'styled-components';

export const DateWrapper = styled.p`
  margin: 0;
  color: #333333;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
`;

export const IconWrapper = styled.div`
  background: #000;
  color: #fff;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  cursor: pointer;
`;

export const LegendText = styled.p`
  font-size: 12px;
  font-family: Montserrat;
  margin-bottom: 0;
`;

export const Dot = styled.span<{ bg?: string }>`
  display: block;
  width: 10px;
  height: 10px;
  background: ${(p) => (p.bg ? p.bg : 'red')};
  border-radius: 50%;
  margin-right: 11px;
`;
