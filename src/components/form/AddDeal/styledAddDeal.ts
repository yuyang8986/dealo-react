import styled from 'styled-components';

export const ChoseItemWrapper = styled.div<{ isActive: boolean }>`
  border-bottom: 1px solid #c1c1c1;
  box-sizing: border-box;
  padding: 5px 10px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 15px;
  background: ${(p) => (p.isActive ? '#ddddddc4' : 'initial')};
  border-radius: ${(p) => (p.isActive ? '5px' : '0')};

  &:hover {
    background: #ddddddc4;
  }
`;

export const ChooseText = styled.p`
  margin: 0;
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  font-weight: normal;
`;

export const ChooseTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: normal;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ChooseItemWrapper = styled.div`
  overflow: hidden;
  max-height: 90vh;
`;

export const AllItems = styled.div`
  overflow-y: auto;
  max-height: 80vh;
`;
export const Choose = styled.div`
  overflow: hidden;
  max-height: 90vh;
`;
