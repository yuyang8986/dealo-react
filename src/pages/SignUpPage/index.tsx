import React, { useState } from 'react';
import Logo from '../../assets/images/logos/logo.png';
import { InputLabel } from '../../components/styledComponents/form/InputLabel';
import { FormInput } from '../../components/styledComponents/form/input';
import { FormSubmitButton } from '../../components/styledComponents/form/buttons';
import { FormTitle } from '../../components/styledComponents/form/title';
import axios, { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const history = useHistory();

  const submitHandler = (e: any) => {
    e.preventDefault();
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    const data = {
      email,
      organization,
      firstName,
      lastName,
      password,
      confirmPassword,
      phone,
    };
    axios
      .post(`${baseURL}/api/authentication/Register`, data)
      .then(() => {
        setError('');
        setSuccess('You account has been created!Redirecting....');
        setTimeout(() => history.push('/login'), 1000);
      })
      .catch((e: AxiosError) => {
        setError(e.response?.data);
      });
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
              <FormTitle>SignUp </FormTitle>
              {error && (
                <div className='alert alert-danger' role='alert'>
                  {error}
                </div>
              )}
              {success && (
                <div className='alert alert-success' role='alert'>
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
                    className='form-control'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='form-group mt-3'>
                  <InputLabel>Organization</InputLabel>
                  <FormInput
                    type='text'
                    className='form-control'
                    placeholder='Organization'
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </div>
                <div className='form-group mt-3'>
                  <InputLabel>First Name</InputLabel>
                  <FormInput
                    type='text'
                    className='form-control'
                    placeholder='Your First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='form-group mt-3'>
                  <InputLabel>Last Name</InputLabel>
                  <FormInput
                    type='text'
                    className='form-control'
                    placeholder='Your Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className='form-group mt-3'>
                  <InputLabel>Phone</InputLabel>
                  <FormInput
                    type='text'
                    className='form-control'
                    placeholder='Your Phone no'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                <div className='form-group mt-3'>
                  <InputLabel>Confirm Password</InputLabel>
                  <FormInput
                    type='password'
                    className='form-control'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <FormSubmitButton className='btn my-4' type='submit'>
                  SignUp
                </FormSubmitButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
