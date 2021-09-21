import * as React from 'react';
import { useContext, useState } from 'react';

import { CreateEventContext, ICreateEventContext, IEditEvent } from '../utils';

export const CreateEventProvider: React.FC = ({ children }) => {
  const [hour, setHour] = useState<string>('');
  const [type, setType] = useState<string>('start');
  const [eventToEdit, setEventToEdit] = useState<IEditEvent>({} as IEditEvent);

  return (
    <CreateEventContext.Provider
      value={{ hour, type, eventToEdit, setHour, setType, setEventToEdit }}>
      {children}
    </CreateEventContext.Provider>
  );
};

export function useCreateEvent(): ICreateEventContext {
  return useContext(CreateEventContext);
}
