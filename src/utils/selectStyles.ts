export const selectCustomStyle = {
  control: (provided: any) => ({
    ...provided,
    border: 'none',
    borderBottom: '1px solid #C1C1C1',
    borderRadius: 0,
    boxShadow: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
export const selectCustomStyle2 = {
  control: (provided: any) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export {};
