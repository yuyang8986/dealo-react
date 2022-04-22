import React from 'react';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { setEmployee } from '../../../../../pages/DealsPage/stageSlice';
import { selectCustomStyle } from '../../../../../utils/selectStyles';

interface EmployeeInterface {
  value: string;
  label: string;
}

const SelectEmployee = () => {
  const employees = useAppSelector((state) => state.employees.employees);
  const selected = useAppSelector((state) => state.stage.selected);
  const dispatch = useAppDispatch();
  const options: EmployeeInterface[] = employees.map((item: any) => {
    const { id, name } = item;
    return { value: id, label: name };
  });

  const onChangeHandler = (data: any) => {
    if (selected !== data?.value) {
      dispatch(setEmployee({ id: data.value }));
    }
  };

  return (
    <div className=''>
      <div className=''>
        <Select
          styles={selectCustomStyle}
          options={options}
          onChange={onChangeHandler}
          defaultValue={options.find((i: EmployeeInterface) => {
            if (i.value === selected) {
              return i;
            }
            return {};
          })}
        />
      </div>
    </div>
  );
};

export default SelectEmployee;
