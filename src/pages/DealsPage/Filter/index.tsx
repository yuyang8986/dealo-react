import React from 'react';
import { FaFilter, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { SearchInput, Text } from './styledFilter';

interface Props {
  searchText: string;
  setSearchText: Function;
  sortType: number;
  setSortType: Function;
}

const Filter = (props: Props) => {
  const { searchText, setSearchText, sortType, setSortType } = props;
  return (
    <div className='d-flex gap-3 align-items-center flex-wrap'>
      <div>
        <div className='d-flex gap-1 align-items-center'>
          <Text>Search</Text>
          <SearchInput
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <p
        className='m-0'
        style={{ cursor: 'pointer' }}
        onClick={() => setSortType((prev: Number) => (prev === 0 ? 1 : 0))}
      >
        {sortType === 1 ? (
          <FaSortAmountDown color='#C5C7CD' />
        ) : (
          <FaSortAmountUp color='#C5C7CD' />
        )}
        <Text> Sort</Text>
      </p>

      <p className='m-0'>
        <FaFilter color='#C5C7CD' /> <Text>Filter</Text>
      </p>
    </div>
  );
};

export default Filter;
