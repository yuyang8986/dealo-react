import styled from 'styled-components';

export const FormInput = styled.input`
  background: #f8f8f8;
  padding: 9px 10px;
  margin-top: 3px;
  font-size: 16px;
  color: #898989;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
`;

export const AddEmployeeInput = styled(FormInput)`
  background: #f8fafc;
  margin-top: 5px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: '#3B4256';
  &:focus {
    background: #f8fafc !important;
  }
`;
export const DealInput = styled(AddEmployeeInput)``;
export const StageInput = styled(AddEmployeeInput)``;
