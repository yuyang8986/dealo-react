import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const AuthRoutes: React.FC<any> = ({ children, ...rest }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return !isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to={'/'} />
  );
};

export default AuthRoutes;
