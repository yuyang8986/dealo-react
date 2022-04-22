import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const ProtectedRoute: React.FC<any> = ({ children, ...rest }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to={'/login'} />
  );
};

export default ProtectedRoute;
