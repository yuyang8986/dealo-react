import React, { useEffect, useState } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AccountInfoIcon from '../../assets/images/account-info.svg';
import AnnoucementsImg from '../../assets/images/announcements.svg';
import LogOutIcon from '../../assets/images/logout.svg';
import QuestionImg from '../../assets/images/question_outline.svg';
import { acceptEnum } from '../../features/modal/modalModel';
import { openModal } from '../../features/modal/modalSlice';
import { fetchCompanies } from '../../pages/Company/action';
import { fetchEmployees } from '../../pages/Employee/action';
import { fetchPerson } from '../../pages/Person/action';
import Loader from '../loader';
import { DividerHr } from '../styledComponents/hr';
import * as Styled from './StyledHeader';

const Header = () => {
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { name, email } = useAppSelector((state) => state.auth.user);
  const logOut = () => {
    dispatch(
      openModal({
        title: 'Are you sure you want to logout?',
        acceptButtonText: 'Logout',
        accept: acceptEnum.logout,
      })
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchEmployees());
      dispatch(fetchCompanies());
      dispatch(fetchPerson());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Styled.HeaderRoot>
      <Styled.HeaderContainerDiv isAccountDialogOpen={isDialogOpen}>
        <div>
          <Styled.HeaderItemDiv>Announcements</Styled.HeaderItemDiv>
          <Styled.HeaderItemDiv>Support</Styled.HeaderItemDiv>

          {!isAuthenticated && (
            <Styled.HeaderItemDiv>Sign In</Styled.HeaderItemDiv>
          )}
          <Loader />

          <Styled.AnnoucementsMobileIconDiv>
            <img src={AnnoucementsImg} alt='annoucement' />
          </Styled.AnnoucementsMobileIconDiv>
          <Styled.QuestionMobileIconDiv>
            <img src={QuestionImg} alt='question' />
          </Styled.QuestionMobileIconDiv>
          {isAuthenticated && (
            <div
              data-testid='account-profile-header-id'
              onMouseOver={() => {
                setIsDialogOpen(true);
              }}
              onMouseOut={() => {
                setIsDialogOpen(false);
              }}
            >
              <Styled.AccountProfileTitleDiv>
                <Styled.HeaderSAIDivcon>SA</Styled.HeaderSAIDivcon>
                <Styled.HeaderAccountTitleDiv>
                  Account
                </Styled.HeaderAccountTitleDiv>
                <Styled.HeaderArrowDownDivIcon>
                  {isDialogOpen ? (
                    <VscChevronUp color={'white'} />
                  ) : (
                    <VscChevronDown color={'white'} />
                  )}
                </Styled.HeaderArrowDownDivIcon>
              </Styled.AccountProfileTitleDiv>
            </div>
          )}
        </div>

        <Styled.AccountProfileDialogDiv
          className='userDialog'
          data-testid='account-profile-dialog-id'
          onMouseOver={() => {
            setIsDialogOpen(true);
          }}
          onMouseOut={() => {
            setIsDialogOpen(false);
          }}
        >
          <Styled.AccountDialogContentTitleDiv>
            {name}
          </Styled.AccountDialogContentTitleDiv>
          <Styled.AccountDialogContentEmailDiv>
            {email}
          </Styled.AccountDialogContentEmailDiv>
          <DividerHr />
          <Styled.AccountDialogContentItemsContainerDiv>
            <Styled.AccountDialogContentItemDiv>
              <img src={AccountInfoIcon} alt='accountinfo' />
              <span>Account Information</span>
            </Styled.AccountDialogContentItemDiv>
            <Styled.AccountDialogContentItemDiv onClick={logOut}>
              <img src={LogOutIcon} alt='logout' /> <span>Logout</span>
            </Styled.AccountDialogContentItemDiv>
          </Styled.AccountDialogContentItemsContainerDiv>
        </Styled.AccountProfileDialogDiv>
      </Styled.HeaderContainerDiv>
    </Styled.HeaderRoot>
  );
};

export default Header;
