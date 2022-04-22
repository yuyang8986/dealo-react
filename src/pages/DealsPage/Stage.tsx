import React, { useEffect, useState } from 'react';
import CommonModal from '../../features/modal/CommonModal';
import Deal from './Deal';
import DealInfo from './DealInfo';
import {
  AllDealWrapper,
  DealButtonWrapper,
  DealItem,
  StageButton,
} from './StyledDeal';

interface Props {
  name: string;
  pipelines: any[];
  searchText: string;
}

const Stage = ({ name, pipelines, searchText }: Props) => {
  const [allDeals, setAllDeals] = useState<any[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  useEffect(() => {
    const data = pipelines.filter((item: any) => {
      if (
        item.dealName.toLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1
      )
        return true;
      return false;
    });
    setAllDeals(data);
  }, [pipelines, searchText]);

  useEffect(() => {
    let total = 0;
    allDeals.forEach((item: any) => {
      total += item?.dealAmount;
    });
    setTotalAmount(total);
  }, [allDeals]);

  const [dealInfoModal, setDealInfoModal] = useState<boolean>(false);
  const [selectedDeal, setSelectedDeal] = useState<any>({});

  const dealClickHandler = (id: string) => {
    setDealInfoModal(true);
    setSelectedDeal(allDeals.find((item) => item.id === id));
  };

  return (
    <>
      <DealItem>
        <DealButtonWrapper>
          <p className='m-0'>{'$' + totalAmount}</p>
          <StageButton>{name}</StageButton>
        </DealButtonWrapper>
        <AllDealWrapper>
          {allDeals.map((item: any) => (
            <Deal
              key={Math.random()}
              dealName={item?.dealName || ''}
              name={item?.applicationUser?.name || ''}
              amount={item?.dealAmount || 0}
              contact={item?.updatedBy || ''}
              click={dealClickHandler}
              id={item.id}
            />
          ))}
        </AllDealWrapper>
      </DealItem>
      <CommonModal open={dealInfoModal} close={setDealInfoModal} size='medium'>
        <DealInfo
          name={selectedDeal.dealName}
          contact={selectedDeal?.applicationUser?.name}
          location=''
          email=''
          id=''
        />
      </CommonModal>
    </>
  );
};

export default Stage;
