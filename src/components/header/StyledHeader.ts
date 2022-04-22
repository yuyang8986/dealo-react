import styled, { css } from 'styled-components';
import device from '../../utils/device';

interface IHeaderStyleProps {
  isAccountDialogOpen: boolean;
}

export const HeaderRoot = styled.header`
  padding: 0 3.5rem;
  display: flex;
  flex-direction: row;
  background-color: rgb(34, 34, 34);
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;

  @media ${device.tabletMax} {
    padding: 0 0.5rem;
  }

  @media ${device.laptopMax} {
    padding: 0 1rem;
  }
`;

export const HeaderContainerDiv = styled.div<IHeaderStyleProps>`
  :first-child > * > :nth-child(2) {
    border-right: 1px solid rgb(135, 140, 145, 0.4);
  }

  ${(props) =>
    props.isAccountDialogOpen &&
    css`
      :hover {
        .userDialog {
          display: inline-block;
        }
      }
    `}

  .userDialog {
    display: none;
    box-shadow: 0 0 10px 0px #adadad;
    position: absolute;
    margin-top: 3.1rem;

    @media ${device.tabletMax} {
      right: 1%;
    }

    @media ${device.mobileLMax} {
      width: 98%;
    }
  }

  display: flex;
  flex-direction: column;

  > :first-child {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
`;

export const AccountProfileTitleDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountProfileDialogDiv = styled.div`
  padding: 1.6rem 0;
  background-color: white;
  height: 12rem;
  width: 25rem;
  flex-direction: column;
  border-radius: 0.25rem;
`;

export const AccountDialogContentTitleDiv = styled.div`
  font-weight: 500;
  padding: 0 1rem;
`;

export const AccountDialogContentEmailDiv = styled.div`
  font-size: ${(props) => props.theme.fontSizes.normal12px};
  padding: 0 1rem;
`;

export const AccountDialogContentItemDiv = styled.div`
  display: flex;
  cursor: pointer;
  > :first-child {
    margin-right: 0.8rem;
  }

  span {
    min-width: 12rem;
  }
`;

export const AccountDialogContentItemsContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;

  > :first-child {
    margin-bottom: 1rem;
  }
`;

export const HeaderItemDiv = styled.div`
  margin: 0.6rem 0;
  padding: 0.2rem 0;
  color: rgb(205, 208, 212);
  :nth-last-child(n + 2) {
    margin-right: 0.8rem;
    padding-right: 1rem;
    @media ${device.mobileLMax} {
      display: none;
    }

    @media ${device.tabletMax} {
      margin-right: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;

export const HeaderAccountTitleDiv = styled.div`
  margin: 0.6rem 0;
  padding: 0.2rem 0;
  color: rgb(205, 208, 212);

  margin-right: 0.4rem;
  padding-right: 0.4rem;
`;

export const HeaderSAIDivcon = styled.div`
  padding: 0.6rem 0;
  color: rgb(244, 244, 244);
  border: 2px solid rgb(244, 244, 244);
  border-radius: 50%;
  width: 1.9rem;
  height: 1.9rem;
  margin-right: 0.5rem;
  margin-left: 0.3rem;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnnoucementsMobileIconDiv = styled.div`
  display: none;
  @media ${device.mobileLMax} {
    display: flex;
  }

  margin-right: 1.5rem;
  height: 1.6rem;
`;

export const QuestionMobileIconDiv = styled.div`
  display: none;
  @media ${device.mobileLMax} {
    display: flex;
    border-right: 1px solid rgb(135, 140, 145, 0.4);
  }
  padding-right: 0.8rem;
  margin-right: 0.5rem;
  height: 1.6rem;
`;

export const HeaderArrowDownDivIcon = styled.div`
  display: flex;
  align-items: center;
`;
