import styled, { keyframes } from 'styled-components';

// keyframes
const rotate1 = keyframes`
0%{
    transform: none;
  }
 100%{
   transform: rotate(1turn);
}
`;
const rotate2 = keyframes`
0%{
    transform: none;
  }
 100%{
   transform: rotate(-1turn);
  }
`;

export const Loader = styled('div')`
  margin: 0;
  border-radius: 50%;
  border: 10px solid;
  border-top: 10px solid #0000ff00;
`;

export const LoaderOne = styled(Loader)`
  width: 100px;
  height: 100px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  transform: translate(calc(-50% - 50px), calc(-50% - 50px));
  animation: ${rotate2} 2s infinite linear;
  border-color: #e86cdb;
  border-top-color: #0000ff00;
`;
export const LoaderTwo = styled(Loader)`
  width: 60px;
  height: 60px;
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  transform: translate(calc(-50% - 30px), calc(-50% - 30px));
  animation: ${rotate1} 2s infinite linear;
  border-color: #2196f3;
  border-top-color: #0000ff00;
`;
export const LoaderThree = styled(Loader)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  transform: translate(calc(-50% - 15px), calc(-50% - 15px));
  animation: ${rotate2} 2s infinite linear;
  border-color: #fe1313;
  border-top-color: #0000ff00;
`;
export const LoaderContentWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
`;
