import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import DealsLayout from '../../components/layout/DealsLayout';
import { fetchStages } from './action';
import DealPagination from './DealPagination';
import Filter from './Filter';
import Stage from './Stage';
import { StageWrapper } from './StyledDeal';

const Deals = () => {
  const dispatch = useAppDispatch();
  const stages = useAppSelector((state) => state.stage.all);
  const selectedEmployee = useAppSelector((state) => state.stage.selected);

  const [itemPerPage, setItemPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [sortType, setSortType] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');

  const [filterStages, setFilterStages] = useState<any[]>([]);

  useEffect(() => {
    dispatch(fetchStages(selectedEmployee));
  }, [dispatch, selectedEmployee]);

  useEffect(() => {
    const startAt: any = itemPerPage * currentPage - itemPerPage;

    const data = stages
      .slice(startAt, startAt + itemPerPage)
      .sort((a: any, b: any) => {
        if (a.displayIndex > b.displayIndex) return sortType === 0 ? 1 : -1;
        if (a.displayIndex < b.displayIndex) return sortType === 0 ? -1 : 1;
        return 1;
      });

    setFilterStages(data);
  }, [stages, itemPerPage, currentPage, sortType]);

  useEffect(() => {
    const count = Math.ceil(stages.length / itemPerPage);
    setTotalPages(count);
  }, [itemPerPage, stages]);

  return (
    <DealsLayout
      filter={
        <Filter
          searchText={searchText}
          setSearchText={setSearchText}
          sortType={sortType}
          setSortType={setSortType}
        />
      }
    >
      <div className='row mt-3'>
        {filterStages.map((stage: any, index) => (
          <StageWrapper
            key={Math.random()}
            itemPerPage={itemPerPage}
            index={index}
          >
            <Stage
              name={stage?.name}
              pipelines={stage?.pipelines}
              searchText={searchText}
            />
          </StageWrapper>
        ))}
      </div>
      <DealPagination
        itemPerPage={itemPerPage}
        totalPages={totalPages}
        currentPage={currentPage}
        setItemPerPage={setItemPerPage}
        setCurrentPage={setCurrentPage}
        totalItem={stages.length}
      />
    </DealsLayout>
  );
};

export default Deals;
