import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useAppSelector } from '../../../../app/hooks';
import * as Styled from '../StyledActivities';
import {
  AddTaskWrapper,
  CheckBoxLabel,
  TaskAddIconWrapper,
  TaskCheckBox,
  TaskHeaderSectionWrapper,
  TaskInput,
} from './StyledTask';

interface TaskInterface {
  id: any;
  text: string;
  date: string;
}

const Tasks = () => {
  const tasks: TaskInterface[] = useAppSelector((state) => {
    const filtered = state.dashboard.activities?.filter((item: any) => {
      return item.activityType === 2;
    });
    return filtered.slice(0, 5).map((item) => {
      const { id, name } = item;
      const dateOptions: any = {
        hour: 'numeric',
        minute: 'numeric',
      };
      return {
        id,
        text: name,
        date: new Date().toLocaleString('default', dateOptions),
      };
    });
  });
  return (
    <div>
      <div className='d-flex justify-content-between'></div>
      <div className='items'>
        <ul className='list-group'>
          <TaskHeaderSectionWrapper className='list-group-item d-flex justify-content-between align-items-end'>
            <Styled.Title className='m-0'>Tasks</Styled.Title>
            <Styled.TextItem className='m-0'>View all</Styled.TextItem>
          </TaskHeaderSectionWrapper>

          <Styled.ActivitiesHeaderSectionWrapper className='list-group-item d-flex justify-content-between align-items-center'>
            <AddTaskWrapper>
              <TaskInput
                type='text'
                placeholder='Create new task'
                className=''
              />
            </AddTaskWrapper>
            <TaskAddIconWrapper>
              <FaPlus />
            </TaskAddIconWrapper>
          </Styled.ActivitiesHeaderSectionWrapper>

          {tasks.map((item: TaskInterface) => (
            <Styled.ListItemWrapper
              className='list-group-item d-flex justify-content-between align-items-end'
              key={item.id}
            >
              <Styled.ListItem className='m-0 d-flex gap-2 align-items-center'>
                <div style={{ position: 'relative' }}>
                  <TaskCheckBox type='checkbox' name='a' id='' />
                  <CheckBoxLabel />
                </div>
                <p className='m-0'>{item.text}</p>
              </Styled.ListItem>
              <Styled.ListText className='m-0'>{item.date}</Styled.ListText>
            </Styled.ListItemWrapper>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
