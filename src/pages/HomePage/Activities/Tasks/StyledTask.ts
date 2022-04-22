import styled from 'styled-components';
import { ActivitiesHeaderSectionWrapper } from '../StyledActivities';

export const AddTaskWrapper = styled.div`
  flex: 1;
`;

export const TaskAddIconWrapper = styled.div`
  background: #f0f1f7;
  padding: 5px 8px;
  height: 100%;
  border-radius: 8px;
  color: #9fa2b4;
  margin-left: 5px;
  font-size: 12px;
`;

export const TaskInput = styled.input`
  width: 100%;
  font-size: 14px;
  color: #c5c7cd;
  border: 0;
  outline: 0;
  padding: 6px;
`;

export const TaskHeaderSectionWrapper = styled(ActivitiesHeaderSectionWrapper)`
  border-bottom: 0px;
  padding-top: 20px;
  padding-bottom: 1.5rem;
`;

// export const TaskListItem = styled()

export const TaskCheckBox = styled.input`
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  /* -webkit-appearance: none; */
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #3751FF;
   & + label{
        opacity: 1;
    }
  }
`;

export const CheckBoxLabel = styled.label`
cursor: pointer;
  border: 3px solid #fff;
  border-top: none;
  border-right: none;
  content: '';
  height: 7px;
  left: 3px;
  opacity: 0;
  position: absolute;
  top: 7px;
  transform: rotate(-45deg);
  width: 12px;
`;
