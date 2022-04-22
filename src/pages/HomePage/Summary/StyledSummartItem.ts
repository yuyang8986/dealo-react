import styled from 'styled-components';

export const ItemText = styled.p`
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
`;

export const ItemCount = styled.h2`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  color: #9e9e9e;
  margin-bottom: 2px;
`;

export const IconWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 30px;
`;

export const SummaryItemMain = styled.div`
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  transition: background 0.5s;
  &:hover {
    background: #ba8585;
    cursor: pointer;
    & p,
    & h2 {
      color: white;
    }
  }
`;
