import React, { useState } from 'react';
import CommonModal from '../../../../features/modal/CommonModal';
import { AddItemButton } from '../../../button/StyledButton';
import AddDeal from '../../../form/AddDeal';
import AddStages from '../../../form/AddStage';
import SelectEmployee from './SelectEmployee';

const DealsHeader = () => {
  const [addDealModal, setAddDealModal] = useState<boolean>(false);
  const [addStageModal, setAddStageModal] = useState<boolean>(false);
  return (
    <div className='row justify-content-end'>
      <div className='col-md-6'>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <SelectEmployee />
          </div>
          <div>
            <AddItemButton onClick={() => setAddStageModal(true)}>
              Add Stage
            </AddItemButton>
          </div>
          <div>
            <AddItemButton onClick={() => setAddDealModal(true)}>
              Add Deal
            </AddItemButton>
          </div>
        </div>
      </div>

      <CommonModal open={addDealModal} close={setAddDealModal}>
        <AddDeal modalClose={setAddDealModal} />
      </CommonModal>
      <CommonModal open={addStageModal} close={setAddStageModal} size='medium'>
        <AddStages modalClose={setAddStageModal} />
      </CommonModal>
    </div>
  );
};

export default DealsHeader;
