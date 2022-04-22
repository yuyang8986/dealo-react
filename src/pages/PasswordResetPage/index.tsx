import React, { useState } from 'react';
import Logo from '../../assets/images/logos/logo.png';
import { InputLabel } from '../../components/styledComponents/form/InputLabel';
import { FormInput } from '../../components/styledComponents/form/input';
import { FormSubmitButton } from '../../components/styledComponents/form/buttons';
import { FormTitle } from '../../components/styledComponents/form/title';
import { PrimaryLink } from '../../components/styledComponents/form/links';
import { useGetQueryValue } from '../../hook/useQuery';
import { resetPassword } from './action';
import { useAppDispatch } from '../../app/hooks';
import { validatePasswords } from '../../validation/resetPasswordValidation';

const PasswordReset = () => {
  const verifyCode = useGetQueryValue('verifyCode') || '';
  const email = useGetQueryValue('email') || '';
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [errors, setErrors] = useState<any>({});
  const serverError = '';
  const dispatch = useAppDispatch();

  const submitHandler = (event: any) => {
    event.preventDefault();

    const { errors, hasError } = validatePasswords({
      newPassword,
      confirmPassword,
    });
    if (!hasError) {
      setErrors({});
      const values = {
        verifyCode,
        email,
        password: newPassword,
        confirmPassword,
      };
      dispatch(
        resetPassword(values, (result: boolean) => {
          if (result) {
            clearInputValues();
            setSuccess('You password is reset successfully!');
          }
        })
      );
    } else {
      setErrors(errors);
    }
  };
  const clearInputValues = () => {
    setNewPassword('');
    setConfirmPassword('');
  };
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-11 col-md-6'>
          <div className='logo text-center'>
            <img src={Logo} alt='' />
          </div>
          <div className='card'>
            <div className='card-body'>
              <FormTitle>Update Password</FormTitle>
              {serverError && (
                <div className='alert alert-danger' role='alert'>
                  {serverError}
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
                <div className='form-group mt-3'>
                  <InputLabel>New Password</InputLabel>
                  <FormInput
                    type='password'
                    className='form-control hasFeedback'
                    placeholder='*************'
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                  />
                  {errors.newPassword && (
                    <div className='invalid-feedback d-block'>
                      {errors.newPassword}
                    </div>
                  )}
                </div>
                <div className='form-group mt-3'>
                  <InputLabel>Confirm New Password</InputLabel>
                  <FormInput
                    type='password'
                    className='form-control hasFeedback'
                    placeholder='*************'
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                  {errors.confirmPassword && (
                    <div className='invalid-feedback d-block'>
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>

                <FormSubmitButton className='btn my-4' type='submit'>
                  Confirm
                </FormSubmitButton>
                <div className='text-center'>
                  <PrimaryLink to='/login'>Back</PrimaryLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
