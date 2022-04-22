import React, { useState } from 'react';
import Logo from '../../assets/images/logos/logo.png';

import { InputLabel } from '../../components/styledComponents/form/InputLabel';
import { FormInput } from '../../components/styledComponents/form/input';
import { PrimaryLink } from '../../components/styledComponents/form/links';
import { FormSubmitButton } from '../../components/styledComponents/form/buttons';
import { FormTitle } from '../../components/styledComponents/form/title';
import axios, { AxiosError } from 'axios';
import { validateEmail } from '../../utils/validateEmail';
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      axios
        .post('/api/authentication/ForgotPassword', { email })
        .then(() => {
          setSuccess('Please check your email! we have sent you email!');
        })
        .catch((e: AxiosError) => setError(e.response?.data));
    } else {
      setError('Invalid email address');
    }
  };

  return (
    <>
      <div className='row'>
        <div className='col-md-6 offset-3'>
          <div className='logo text-center'>
            <img src={Logo} alt='' />
          </div>

          <div className='card'>
            <div className='card-body'>
              <FormTitle>Forgot Password </FormTitle>
              {success && (
                <div
                  className='alert alert-success'
                  key={Math.random()}
                  role='alert'
                >
                  {success}
                </div>
              )}
              <form
                action=''
                style={{ marginTop: 20 }}
                onSubmit={submitHandler}
              >
                <div className='form-group'>
                  <InputLabel>Email</InputLabel>
                  <FormInput
                    type='email'
                    className='form-control has-feedback'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && (
                    <div className='invalid-feedback d-block'>{error}</div>
                  )}
                </div>

                <FormSubmitButton className='btn my-4' type='submit'>
                  SEND VERIFICATION CODE
                </FormSubmitButton>
                <div className='text-center'>
                  <PrimaryLink to='/#'>Back</PrimaryLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
