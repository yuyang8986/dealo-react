import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/logos/logo.png';

import { InputLabel } from '../../components/styledComponents/form/InputLabel';
import { FormInput } from '../../components/styledComponents/form/input';
import {
  NavigationLink,
  PrimaryLink,
} from '../../components/styledComponents/form/links';
import { FormSubmitButton } from '../../components/styledComponents/form/buttons';
import { FormTitle } from '../../components/styledComponents/form/title';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { login } from './action';
import { useHistory } from 'react-router-dom';
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { errors, page, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  const dispatch = useDispatch<AppDispatch>();
  const submitHandler = async (event: any) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-6 '>
          <div className='logo text-center'>
            <img src={Logo} alt='' />
          </div>
          <div className='card'>
            <div className='card-body'>
              <FormTitle>Login </FormTitle>
              <div>
                {page === 'login' &&
                  Object.values(errors).map((e) => (
                    <div
                      className='alert alert-danger'
                      key={Math.random()}
                      role='alert'
                    >
                      {e}
                    </div>
                  ))}
              </div>
              <form action='' style={{ marginTop: 20 }}>
                <div className='form-group'>
                  <InputLabel>Email address</InputLabel>
                  <FormInput
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='form-group mt-3'>
                  <InputLabel>Password</InputLabel>
                  <FormInput
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='d-flex justify-content-end mt-3'>
                  <NavigationLink to='/forgot-password'>
                    Forgot password?
                  </NavigationLink>
                </div>
                <FormSubmitButton
                  className='btn my-4'
                  type='submit'
                  onClick={submitHandler}
                >
                  Login
                </FormSubmitButton>
                <div className='text-center'>
                  <PrimaryLink to={'/sign-up'}>Create new account</PrimaryLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
