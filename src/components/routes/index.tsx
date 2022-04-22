import { Route, Switch } from 'react-router-dom';
import Company from '../../pages/Company';
import Employee from '../../pages/Employee';
import ForgotPassword from '../../pages/ForgotPasswordPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage/index';
import PasswordReset from '../../pages/PasswordResetPage';
import Person from '../../pages/Person';
import SignUp from '../../pages/SignUpPage';
import ProtectedRoute from './ProtectedRoute';
import AuthRoutes from './AuthRoutes';
import Deals from '../../pages/DealsPage';
const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path='/' exact>
        <HomePage />
      </ProtectedRoute>

      <AuthRoutes path='/login' exact>
        <LoginPage />
      </AuthRoutes>

      <AuthRoutes path='/sign-up' exact>
        <SignUp />
      </AuthRoutes>
      <AuthRoutes path='/forgot-password' exact>
        <ForgotPassword />
      </AuthRoutes>
      <AuthRoutes path='/reset-password' exact>
        <PasswordReset />
      </AuthRoutes>

      <ProtectedRoute path='/contact/company/' exact>
        <Company />
      </ProtectedRoute>
      <ProtectedRoute path='/contact/person/' exact>
        <Person />
      </ProtectedRoute>
      <ProtectedRoute path='/contact/employee/' exact>
        <Employee />
      </ProtectedRoute>
      <Route path='/deals'>
        <Deals />
      </Route>
    </Switch>
  );
};

export default Routes;
