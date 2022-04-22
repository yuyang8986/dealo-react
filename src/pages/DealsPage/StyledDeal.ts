import styled from 'styled-components';

export const DealWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f0eded;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DealText = styled.p`
  margin: 0;
  font-weight: 700;
  font-family: Muilish;
  font-size: 14px;
  color: #000;
`;

export const StageButton = styled.p`
  background: #6cc3e8;
  display: inline-block;
  padding: 0px 15px;
  border-radius: 10px;
  color: #fff;
  letter-spacing: 1px;
  font-family: Mulish;
  margin: 0;
  cursor: pointer;
`;

export const StageWrapper = styled.div<{ itemPerPage: number; index: number }>`
  flex: 0 0 auto;
  width: ${(p) => 100 / p.itemPerPage}%;
  border-right: ${(p) =>
    p.index + 1 === p.itemPerPage ? 'none' : '1px solid #C1C1C1'};
`;

export const DealButtonWrapper = styled.div`
  text-align: center;
`;

export const DealItem = styled.div`
  padding: 10px 15px;
`;

export const AllDealWrapper = styled.div`
  margin-top: 20px;
`;
