import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { addStage } from '../../../pages/DealsPage/action';
import {
  ContactFormBackButton,
  ContactFormSubmitButton,
} from '../../button/StyledButton';
import { StageInput } from '../../styledComponents/form/input';
import { StageInputLabel } from '../../styledComponents/form/InputLabel';
import { StageTitle } from '../StyledForm';
interface Props {
  modalClose: Function;
}
const AddStages = ({ modalClose }: Props) => {
  const dispatch = useAppDispatch();
  const [stageName, setStageName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const submitHandler = async (event: any) => {
    event.preventDefault();
    if (stageName) {
      await dispatch(
        addStage({ name: stageName }, (result: boolean) => {
          if (result) {
            setStageName('');
            modalClose(false);
          }
        })
      );
    }
  };

  const nameChangeHandler = (event: any) => {
    const value = event.target.value;
    if (!value) {
      setError('Stage name is required!');
    } else {
      setError('');
    }
    setStageName(value);
  };

  return (
    <div className='py-3'>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <StageTitle className='mb-4'>Add Deal</StageTitle>

          <form className='mt-4' onSubmit={submitHandler}>
            <div className='form-group mb-3'>
              <StageInputLabel>Create Stage</StageInputLabel>
              <StageInput
                type='text'
                className='form-control '
                value={stageName}
                onChange={nameChangeHandler}
              />
              {error && <div className='invalid-feedback d-block'>{error}</div>}
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
    </div>
  );
};

export default AddStages;
