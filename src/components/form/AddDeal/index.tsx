import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import CommonModal from '../../../features/modal/CommonModal';
import { addNewDeal } from '../../../pages/DealsPage/action';
import { selectCustomStyle } from '../../../utils/selectStyles';
import {
  ContactFormBackButton,
  ContactFormSubmitButton,
} from '../../button/StyledButton';
import { DealInput } from '../../styledComponents/form/input';
import { DealInputLabel } from '../../styledComponents/form/InputLabel';
import { DealTitle } from '../StyledForm';
import ChooseCompany from './ChooseCompany';
import ChoosePerson from './ChoosePerson';
interface Props {
  modalClose: Function;
}

interface ErrorValueItems {
  dealName?: string;
  dealAmount?: string;
  cogs?: string;
  grossProfit?: string;
  company?: string;
  person?: string;
  stageId?: string;
}

const AddDeal = (props: Props) => {
  const { modalClose } = props;

  const dispatch = useAppDispatch();

  const allStages = useAppSelector((state) => {
    const stages = state.stage.all;
    return stages.map((item: any) => ({ value: item.id, label: item.name }));
  });

  const [dealName, setDealName] = useState<string>('');
  const [dealAmount, setDealAmount] = useState<string>('');
  const [cogsAmount, setCogsAmount] = useState<string>('');
  const [grossProfit, setGrossProfit] = useState<string>('');
  const [companyId, setCompany] = useState<string>('');
  const [personId, setPerson] = useState<string>('');
  const [stageId, setStageId] = useState<string>('');
  const [errors, setErrors] = useState<ErrorValueItems | any>({});

  const [companyModal, setCompanyModal] = useState<boolean>(false);
  const [personModal, setPersonModal] = useState<boolean>(false);

  const inputValidation = useCallback(() => {
    if (!dealName) {
      setErrorValue('dealName', 'This Field is required');
    } else {
      setErrorValue('dealName', '');
    }
    if (!dealAmount) {
      setErrorValue('dealAmount', 'This Field is required');
    } else if (!~~dealAmount) {
      setErrorValue('dealAmount', 'Invalid amount');
    } else {
      setErrorValue('dealAmount', '');
    }
    if (!cogsAmount) {
      setErrorValue('cogsAmount', 'This Field is required');
    } else if (!~~cogsAmount) {
      setErrorValue('cogsAmount', 'Invalid amount');
    } else {
      setErrorValue('cogsAmount', '');
    }
    if (!grossProfit) {
      setErrorValue('grossProfit', 'This Field is required');
    } else {
      setErrorValue('grossProfit', '');
    }
    if (!companyId && !personId) {
      setErrorValue('company', 'Select either company or person');
      setErrorValue('person', 'Select either company or person');
    } else {
      setErrorValue('company', '');
      setErrorValue('person', '');
    }

    if (!stageId) {
      setErrorValue('stageId', 'This Field is required');
    } else {
      setErrorValue('stageId', '');
    }
  }, [
    dealName,
    dealAmount,
    cogsAmount,
    grossProfit,
    stageId,
    companyId,
    personId,
  ]);

  const setErrorValue = (name: string, value: string) => {
    setErrors((prev: ErrorValueItems) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    inputValidation();
  }, [inputValidation]);

  const submitHandler = (event: any) => {
    event.preventDefault();
    const isError = Object.values(errors).filter(Boolean).length > 0;
    if (!isError) {
      const data: any = {
        dealName,
        dealAmount,
        cogsAmount,
        grossProfit,
        stageId,
        type: 1,
      };
      if (personId) {
        data.personId = personId;
      }
      if (companyId) {
        data.companyId = companyId;
      }
      dispatch(
        addNewDeal(data, (result: boolean) => {
          if (result) {
            modalClose(false);
          }
        })
      );
    }
  };

  const selectCompany = (value: string) => {
    setCompany(value);
    setCompanyModal(false);
  };
  const selectPerson = (value: string) => {
    setPerson(value);
    setPersonModal(false);
  };

  return (
    <div className='py-3'>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <DealTitle className='mb-4'>Add Deal</DealTitle>
          <div className='mb-3'>
            <ContactFormSubmitButton
              type='button'
              onClick={() => setCompanyModal(true)}
              className='mb-0'
              disabled={!!personId}
            >
              Choose Company
            </ContactFormSubmitButton>
            {errors?.company && (
              <div className='invalid-feedback d-block'>{errors.company}</div>
            )}
          </div>
          <div className='mb-3'>
            <ContactFormSubmitButton
              type='button'
              onClick={() => setPersonModal(true)}
              className='mb-0'
              disabled={!!companyId}
            >
              CHOOSE PERSON
            </ContactFormSubmitButton>
            {errors?.person && (
              <div className='invalid-feedback d-block'>{errors.person}</div>
            )}
          </div>
          <form className='mt-4' onSubmit={submitHandler}>
            <div className='form-group mb-3'>
              <DealInputLabel>Select Stage</DealInputLabel>
              <Select
                styles={selectCustomStyle}
                options={allStages}
                onChange={(data: any) => setStageId(data?.value)}
              />
              {errors?.stageId && (
                <div className='invalid-feedback d-block'>{errors.stageId}</div>
              )}
            </div>
            <div className='form-group mb-3'>
              <DealInputLabel>Deal Name</DealInputLabel>
              <DealInput
                type='text'
                className='form-control '
                name='dealName'
                value={dealName}
                onChange={(e) => setDealName(e.target.value)}
              />
              {errors?.dealName && (
                <div className='invalid-feedback d-block'>
                  {errors.dealName}
                </div>
              )}
            </div>
            <div className='form-group mb-3'>
              <DealInputLabel>Deal Amount</DealInputLabel>
              <DealInput
                type='text'
                className='form-control '
                value={dealAmount}
                onChange={(e) => setDealAmount(e.target.value)}
              />
              {errors?.dealAmount && (
                <div className='invalid-feedback d-block'>
                  {errors.dealAmount}
                </div>
              )}
            </div>
            <div className='form-group mb-3'>
              <DealInputLabel>COGS</DealInputLabel>
              <DealInput
                type='text'
                className='form-control '
                value={cogsAmount}
                onChange={(e) => setCogsAmount(e.target.value)}
              />
              {errors?.cogsAmount && (
                <div className='invalid-feedback d-block'>
                  {errors.cogsAmount}
                </div>
              )}
            </div>
            <div className='form-group mb-3'>
              <DealInputLabel>Gross Profit</DealInputLabel>
              <DealInput
                type='text'
                className='form-control '
                value={grossProfit}
                onChange={(e) => setGrossProfit(e.target.value)}
              />
              {errors?.grossProfit && (
                <div className='invalid-feedback d-block'>
                  {errors.grossProfit}
                </div>
              )}
            </div>

            <div className='d-flex justify-content-end'>
              <ContactFormBackButton onClick={() => modalClose(false)}>
                back
              </ContactFormBackButton>
              <ContactFormSubmitButton type='submit'>
                Confirm
              </ContactFormSubmitButton>
            </div>
          </form>
        </div>
      </div>
      <CommonModal open={companyModal} close={setCompanyModal} size='medium'>
        <ChooseCompany select={selectCompany} value={companyId} />
      </CommonModal>
      <CommonModal open={personModal} close={setPersonModal} size='medium'>
        <ChoosePerson value={personId} select={selectPerson} />
      </CommonModal>
    </div>
  );
};

export default AddDeal;
