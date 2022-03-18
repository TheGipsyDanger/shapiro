import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

import { useDate } from './Date';

import {
  IDay,
  IDays,
  IEvent,
  IDayNames,
  IEventsContext,
  mockDaysData,
  mockDaysDataEmpty,
} from '~/utils';

import { useStorage } from './Storage';

import { isMock } from '../../app.json';

export const EventContext = createContext<IEventsContext>({} as IEventsContext);

export const EventProvider: React.FC = ({ children }) => {
  const { getStorage, setStorage } = useStorage();
  const {
    date: { dayName },
  } = useDate();

  const [days, setDays] = useState<IDays>(mockDaysData);

  const [spotlightDay, setSpotlightDay] = useState<IDay>({
    [dayName]: days[dayName.toLowerCase() as IDayNames],
  });

  const [selectedDay, setSelectedDay] = useState<IDay>({
    [dayName]: days[dayName.toLowerCase() as IDayNames],
  });

  const getDaysStorage = async () => {
    var days = await getStorage('days');
    days = isEmpty(days) ? mockDaysDataEmpty : days;
    days = isMock ? mockDaysData : days;
    const dayToInit = { [dayName]: days[dayName.toLowerCase() as IDayNames] };
    setDays(days);
    setSpotlightDay(dayToInit);
    setSelectedDay(dayToInit);
  };

  useEffect(() => {
    getDaysStorage();
  }, []);

  const [currentEvent, setCurrentEvent] = useState<IEvent>({} as IEvent);

  const [imageIndex, setImageIndex] = useState<number>(0);

  const updateDays = async (days: IDays): Promise<any> => {
    try {
      await setStorage('days', days);
      setDays(days);
      setSpotlightDay({
        [dayName]: days[dayName.toLowerCase() as IDayNames],
      });
      setSelectedDay({
        [dayName]: days[dayName.toLowerCase() as IDayNames],
      });
    } catch (error) {}
    return days;
  };

  return (
    <EventContext.Provider
      value={{
        days,
        updateDays,
        imageIndex,
        selectedDay,
        currentEvent,
        spotlightDay,
        setImageIndex,
        setSelectedDay,
        setCurrentEvent,
      }}>
      {children}
    </EventContext.Provider>
  );
};

export function useEvent(): IEventsContext {
  return useContext(EventContext);
}
