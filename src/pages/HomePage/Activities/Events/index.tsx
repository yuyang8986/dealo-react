import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import * as Styled from '../StyledActivities';

interface EventInterface {
  id: any;
  text: string;
  date: string;
}

const Events = () => {
  const events: EventInterface[] = useAppSelector((state) => {
    const filtered = state.dashboard.activities?.filter((item: any) => {
      return item.activityType === 1;
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
    <div className='mt-4'>
      <div className='d-flex justify-content-between'></div>
      <div className='items'>
        <ul className='list-group'>
          <Styled.ActivitiesHeaderSectionWrapper className='list-group-item d-flex justify-content-between align-items-end'>
            <Styled.Title className='m-0'>Events</Styled.Title>
            <Styled.TextItem className='m-0'>View all</Styled.TextItem>
          </Styled.ActivitiesHeaderSectionWrapper>

          {events.map((item: EventInterface) => (
            <Styled.ListItemWrapper
              className='list-group-item d-flex justify-content-between align-items-end'
              key={item.id}
            >
              <Styled.ListItem className='m-0'>{item.text}</Styled.ListItem>
              <Styled.ListText className='m-0'>{item.date}</Styled.ListText>
            </Styled.ListItemWrapper>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Events;
