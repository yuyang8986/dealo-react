import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ReactSelect from 'react-select';
import { selectCustomStyle2 } from '../../../utils/selectStyles';
import {
  PaginationArrow,
  PaginationText,
  PaginationWrapper,
} from './styledPagination';

interface Props {
  totalItem: number;
  itemPerPage: number;
  totalPages: number;
  currentPage: number;
  setItemPerPage: Function;
  setCurrentPage: Function;
}

const paginationOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
  value: i,
  label: i,
}));

const DealPagination = (props: Props) => {
  const {
    setItemPerPage,
    itemPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    totalItem,
  } = props;

  const next = () => {
    setCurrentPage((prev: number) => prev + 1);
  };
  const prev = () => {
    setCurrentPage((prev: number) => prev - 1);
  };

  const secondCount =
    itemPerPage * currentPage > totalItem
      ? totalItem
      : itemPerPage * currentPage;

  return (
    <div className='d-flex justify-content-end align-items-center mt-4'>
      <PaginationWrapper>
        <div className='d-flex gap-2 align-items-center'>
          <span>Row Per Page</span>
          <ReactSelect
            styles={selectCustomStyle2}
            options={paginationOptions}
            defaultValue={{ value: itemPerPage, label: itemPerPage }}
            onChange={(data: any) => setItemPerPage(data.value)}
            menuPlacement='top'
          />
        </div>
        <div className='d-flex gap-4 align-items-center'>
          <div className='d-flex gap-2'>
            <PaginationText>
              {itemPerPage * currentPage - itemPerPage + 1}-{secondCount}
            </PaginationText>
            <PaginationText>of</PaginationText>
            <PaginationText>{totalItem}</PaginationText>
          </div>
          <div className='arrows d-flex gap-1'>
            <PaginationArrow disabled={currentPage === 1} onClick={prev}>
              <FaAngleLeft />
            </PaginationArrow>
            <PaginationArrow
              disabled={currentPage === totalPages}
              onClick={next}
            >
              <FaAngleRight />
            </PaginationArrow>
          </div>
        </div>
      </PaginationWrapper>
    </div>
  );
};

export default DealPagination;
