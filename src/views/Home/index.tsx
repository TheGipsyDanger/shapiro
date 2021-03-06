import * as React from 'react';

import { useEvent, useDate } from '~/hooks';
import { createDaysFactory, IDayNames, navigate } from '~/utils';

import { IHome } from '@/Home';
import { Home as Layout } from './Layout';

export const Home = (props: IHome) => {
  const { days, setSelectedDay } = useEvent();

  var {
    date: { dayName },
  } = useDate();

  const Days = createDaysFactory(days);

  const selectDay = (day: IDayNames) => {
    const dayObj = Days.selectedDay(day);
    setSelectedDay(dayObj);
    navigate('EventsOfDay');
  };

  const layoutProps = {
    ...props,
    dayName,
    selectDay,
    goToCamera: () => navigate('ShapiroCamera'),
    goToCreateEvent: () => navigate('CreateEvent'),
    days: Days.daysWithEvents(),
  };

  return <Layout {...layoutProps} />;
};
