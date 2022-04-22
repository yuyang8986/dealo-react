import React from 'react';

const Employee = ({ value }: { value: string }) => {
  return <option value={value}>{value}</option>;
};

export default Employee;
