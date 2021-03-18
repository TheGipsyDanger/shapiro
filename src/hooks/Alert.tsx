import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { IAlertContext, IAlertCtx } from '../utils';

export const AlertContext = createContext<IAlertContext>({} as IAlertContext);

export const AlertProvider: React.FC = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  const [alertCtx, setAlertCtx] = useState<IAlertCtx>({
    title: '',
    message: '',
    type: 'error',
  });

  const showAlert = (ctx: IAlertCtx) => {
    setIsShow(true);
    setAlertCtx(ctx);
  };

  const value = {
    isShow,
    alertCtx,
    setIsShow,
    showAlert,
  };

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export function useAlert(): IAlertContext {
  return useContext(AlertContext);
}
