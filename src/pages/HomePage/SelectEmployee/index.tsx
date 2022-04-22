import React from 'react';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCustomStyle } from '../../../utils/selectStyles';
import { setSelected } from '../dashboardSlice';

interface PaginationInterface {
  value: string;
  label: string;
}

const SelectEmployee = () => {
  const employees = useAppSelector((state) => state.employees.employees);
  const selected = useAppSelector((state) => state.dashboard.selected);
  const dispatch = useAppDispatch();
  const options: PaginationInterface[] = employees.map((item: any) => {
    const { id, name } = item;
    return { value: id, label: name };
  });

  const onChangeHandler = (data: any) => {
    if (selected !== data?.value) {
      dispatch(setSelected({ id: data.value }));
    }
  };

  return (
    <div className='row'>
      <div className='col-5 col-md-3'>
        <Select
          styles={selectCustomStyle}
          options={options}
          onChange={onChangeHandler}
          defaultValue={options.find((i: PaginationInterface) => {
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
