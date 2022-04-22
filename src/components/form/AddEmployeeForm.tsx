import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setError } from '../../pages/Company/companySlice';
import {
  addEmployeeAction,
  AddEmployeeData,
} from '../../pages/Employee/action';
import { AddEmployeeValidation } from '../../validation/employeeValidation';
import {
  ContactFormSubmitButton,
  ContactFormBackButton,
} from '../button/StyledButton';
import { AddEmployeeInput } from '../styledComponents/form/input';
import { AddEmployeeInputLabel } from '../styledComponents/form/InputLabel';
import { AddEmployeeTitle } from './StyledForm';

const AddEmployeeForm = ({ close }: { close: Function }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [errors, setErrors] = useState<any>({});
  const error = useAppSelector((state) => {
    if (state.employees.page === 'add') {
      return state.employees.errors;
    }
    return false;
  });

  const dispatch = useAppDispatch();
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const values: AddEmployeeData = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    const { errors, hasError } = AddEmployeeValidation(values);
    if (!hasError) {
      setErrors({});
      await dispatch(addEmployeeAction(values));
    } else {
      setErrors(errors);
    }
  };

  const clearFieldValue = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className='py-3'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <AddEmployeeTitle>Add Employee</AddEmployeeTitle>
          {error && (
            <div
              className='alert alert-danger'
              key={Math.random()}
              role='alert'
            >
              {error}
            </div>
          )}
          <form className='mt-4' onSubmit={submitHandler}>
            <div className='form-group mb-3'>
              <AddEmployeeInputLabel>First Name</AddEmployeeInputLabel>
              <AddEmployeeInput
                type='text'
                className='form-control '
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <div className='invalid-feedback d-block'>
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className='form-group mb-3'>
              <AddEmployeeInputLabel>Last Name</AddEmployeeInputLabel>
              <AddEmployeeInput
                type='text'
                className='form-control has-feedback'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <div className='invalid-feedback d-block'>
                  {errors.lastName}
                </div>
              )}
            </div>
            <div className='form-group mb-3'>
              <AddEmployeeInputLabel>Email Address</AddEmployeeInputLabel>
              <AddEmployeeInput
                type='Email'
                className='form-control has-feedback'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className='invalid-feedback d-block'>{errors.email}</div>
              )}
              {email && !errors?.email && (
                <div className='valid-feedback d-block'>Valid Email!</div>
              )}
            </div>
            <div className='form-group mb-3'>
              <AddEmployeeInputLabel>Phone</AddEmployeeInputLabel>
              <AddEmployeeInput
                type='text'
                className='form-control has-feedback'
                placeholder='Phone'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && (
                <div className='invalid-feedback d-block'>
                  {errors.phoneNumber}
                </div>
              )}
              {phoneNumber && !errors?.phoneNumber && (
                <div className='valid-feedback d-block'>Valid Number!</div>
              )}
            </div>
            <div className='d-flex justify-content-end'>
              <ContactFormBackButton
                onClick={() => {
                  clearFieldValue();
                  close();
                  dispatch(setError({ errors: {}, page: '' }));
                }}
              >
                back
              </ContactFormBackButton>
              <ContactFormSubmitButton type='submit'>
                Confirm
              </ContactFormSubmitButton>
            </div>
          </form>
          <p
            style={{
              fontFamily: `'Roboto', sans-serif`,
              fontWeight: 500,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#000000',
            }}
          >
            Account Availability: 3/3
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
