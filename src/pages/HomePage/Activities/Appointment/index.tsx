import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import * as Styled from '../StyledActivities';
import { AppointmentHeaderSectionWrapper } from './StyledAppointment';
interface AppointmentInterface {
  id: any;
  text: string;
  date: string;
}

const Appointment = () => {
  const items: AppointmentInterface[] = useAppSelector((state) => {
    const filtered = state.dashboard.activities?.filter((item: any) => {
      return item.activityType === 0;
    });
    return filtered.map((item) => {
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
          <AppointmentHeaderSectionWrapper className='list-group-item d-flex justify-content-between align-items-end'>
            <Styled.Title className='m-0'>Appointment</Styled.Title>
            <Styled.TextItem className='m-0'>View all</Styled.TextItem>
          </AppointmentHeaderSectionWrapper>

          {items.map((item: AppointmentInterface) => (
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

export default Appointment;
