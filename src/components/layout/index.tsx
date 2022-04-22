import React from 'react';
import * as Styled from './StyledLayout';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const isAuthenticated = useSelector<RootState>(
    (state) => state.auth.isAuthenticated
  );
  return (
    <Styled.WrapperDiv>
      <Styled.ContainerDiv>
        <Styled.MidDiv>
          {isAuthenticated && <Sidebar />}
          <Styled.ContentArea isLoggedIn={!!isAuthenticated}>
            <Header />
            <Styled.ContentWrapperDivContainer>
              <Styled.ContentDivContainer>
                {children}
              </Styled.ContentDivContainer>
              <Footer />
            </Styled.ContentWrapperDivContainer>
          </Styled.ContentArea>
        </Styled.MidDiv>
      </Styled.ContainerDiv>
    </Styled.WrapperDiv>
  );
};

export default Layout;
