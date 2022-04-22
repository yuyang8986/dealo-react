import { AddEmployeeData } from '../pages/Employee/action';
import { validatePhoneNo } from '../utils/string';
import { validateEmail } from './../utils/validateEmail';

export const AddEmployeeValidation = (values: AddEmployeeData) => {
  const { firstName, lastName, email, phoneNumber } = values;

  const e: any = {};

  if (!firstName) {
    e.firstName = 'First Name is required';
  }
  if (!lastName) {
    e.lastName = 'Last Name is required';
  }
  if (!email) {
    e.email = 'Email is required';
  } else if (!validateEmail(email)) {
    e.email = 'Email must be valid!';
  }
  if (!phoneNumber) {
    e.phoneNumber = 'Phone is required';
  } else if (!validatePhoneNo(phoneNumber)) {
    e.phoneNumber = 'Phone is invalid!';
  }

  return { hasError: Object.keys(e).length > 0, errors: e };
};
