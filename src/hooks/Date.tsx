import * as React from 'react';
import { createContext, useContext } from 'react';

import { IDateContext, IDate } from '../utils/interfaces/DateInterfaces';

import moment from 'moment';

export const DateContext = createContext<IDateContext>({} as IDateContext);

export const DateProvider: React.FC = ({ children }) => {
  const now = moment();

  const date: IDate = {
    dayName: now.format('dddd'),
    day: now.date(),
    month: now.format('MMMM').substring(0, 3),
    year: now.format('YYYY'),
  };

  return (
    <DateContext.Provider value={{ date }}>{children}</DateContext.Provider>
  );
};

export function useDate(): IDateContext {
  return useContext(DateContext);
}
