import { createContext } from 'react';

export interface ICreateEventContext {
  hour: string;
  type: string;
  setHour(hour: string): void;
  setType(type: string): void;
}

export const CreateEventContext = createContext<ICreateEventContext>(
  {} as ICreateEventContext
);
