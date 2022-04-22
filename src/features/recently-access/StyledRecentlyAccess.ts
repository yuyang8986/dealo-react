import styled from "styled-components";
import device from "../../utils/device";
import { BaseTitleH3 } from "../../components/styledComponents/h3-title";

export const RecentlyAccessContentContainerDiv = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-right:2.1875rem;
  margin-bottom:2rem;
  @media ${device.laptopMax} {
    margin-right: 1.25rem;
  }
  @media ${device.tabletMax} {
    flex-basis: 100%;
    margin-right: 0;
  }
`;

export const TitleTextH3 = styled(BaseTitleH3)`
  margin-bottom: 2rem;
`;
