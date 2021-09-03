import * as React from 'react';
import { useContext, useState } from 'react';
import {
  CreateEventContext,
  ICreateEventContext,
} from '../utils/interfaces/CreateEventInterfaces';

export const CreateEventProvider: React.FC = ({ children }) => {
  const [hour, setHour] = useState<string>('');
  const [type, setType] = useState<string>('start');

  return (
    <CreateEventContext.Provider value={{ hour, type, setHour, setType }}>
      {children}
    </CreateEventContext.Provider>
  );
};

export function useCreateEvent(): ICreateEventContext {
  return useContext(CreateEventContext);
}
