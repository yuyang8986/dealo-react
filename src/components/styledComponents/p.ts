import styled from "styled-components";

export const BaseGreyTextP = styled.p`
  font-weight: normal;
  color: ${(props) => props.theme.colors.greyTextColor};
`;

export const GreyTextLargeP = styled(BaseGreyTextP)`
  font-size: ${(props) => props.theme.fontSizes.large16px};
`;

export const GreyTextSmallP = styled(BaseGreyTextP)`
  font-size: ${(props) => props.theme.fontSizes.small11px};
`;

export const PrimaryGreyTextP = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3125rem;
  color: ${(props) => props.theme.colors.greyTextColor};
`;
