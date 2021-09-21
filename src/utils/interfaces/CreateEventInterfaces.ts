import { createContext } from 'react';
import { IEditEvent } from '~/utils';

export interface ICreateEventContext {
  hour: string;
  type: string;
  eventToEdit: IEditEvent;
  setEventToEdit(event: IEditEvent): void;
  setHour(hour: string): void;
  setType(type: string): void;
}

export const CreateEventContext = createContext<ICreateEventContext>(
  {} as ICreateEventContext
);
