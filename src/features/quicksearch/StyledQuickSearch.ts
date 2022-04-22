import styled from "styled-components";
import Background from "../../assets/images/mean-lines.png";
import device from "../../utils/device";
import BackgroundMobile from "../../assets/images/mean-lines-mobile.png";

export const QuickSearchBarDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  margin: -2rem -3rem 2rem -2.1875rem;
  padding: 2rem 3rem 2rem 2.1875rem;

  @media ${device.laptopMax}{
    margin: -2rem -1.25rem 2rem -1.25rem;
    padding: 2rem 1.25rem 2rem 1.25rem;
  }
  @media ${device.mobileSMax} {
    background-image: url(${BackgroundMobile});
  }
`;

export const TitleTextDiv = styled.div`
  font-size: 1.5rem;
  color: rgb(244, 244, 244);
  margin-bottom: 1rem;
`;

export const TipsAndAdvancedSearchLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  color: rgb(213, 217, 222);
`;
