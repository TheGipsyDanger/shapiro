import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent, useDate, useAlert } from '~/hooks';
import { createDaysFactory, IDayNames } from '~/utils';

import { IHome } from './data';
import { Home as Layout } from './Layout';

export const Home: React.FC<IHome> = props => {
  const { navigate } = useNavigation();
  const { showAlert } = useAlert();

  const { days, setSelectedDay } = useEvent();

  var {
    date: { dayName },
  } = useDate();

  dayName = dayName.toLowerCase();

  const Days = createDaysFactory(days);

  const emptyMessage = () =>
    showAlert({
      title: `Ops...`,
      message: 'Esse evento não possui nenhuma foto.',
      type: 'error',
    });

  const selectDay = (day: IDayNames) => {
    const dayObj = Days.selectedDay(day);

    if (!dayObj[day].events.length) return emptyMessage();

    setSelectedDay(dayObj);
    navigate('EventsOfDay');
  };

  const layoutProps = {
    ...props,
    selectDay,
    goToCamera: () => navigate('ShapiroCamera'),
    goToCreateEvent: () => navigate('CreateEvent'),
    days: Days.daysWithEvents(),
  };

  return <Layout {...layoutProps} />;
};
