import styled from "styled-components";


export const BaseTitleH3 = styled.h3`
  font-size: ${props=>props.theme.fontSizes.xlarge18px};
  font-weight: 500;
`;

export const TitleBlueH3 = styled(BaseTitleH3)`
  color: ${(props)=>props.theme.colors.h3titleColor};
`;
