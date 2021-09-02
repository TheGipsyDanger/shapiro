import * as React from 'react';

import { createContext, useContext, useState } from 'react';

import { IFunctions, IModalNames, IModalContext } from '../utils';

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalName, setModalName] = useState('default');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCtx, setModalCtx] = useState('');
  const [functions, setFunctions] = useState<IFunctions>([() => {}]);

  const openModal = (name: IModalNames) => {
    setModalName(name);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalName('default');
    setModalIsOpen(false);
    defineFunctions([() => null]);
  };

  const defineFunctions = (functions: IFunctions) => {
    setFunctions(functions);
  };

  const defineCtx = (ctx: string) => {
    console.log({ ctx });
  };

  return (
    <ModalContext.Provider
      value={{
        functions,
        openModal,
        modalName,
        defineCtx,
        closeModal,
        modalIsOpen,
        defineFunctions,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): IModalContext {
  return useContext(ModalContext);
}
