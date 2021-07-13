import * as React from 'react';

import { ModalQuestion } from '../ModalQuestion';

import { useModal } from '../../hooks';
import { IElementMap } from '../../utils';

export const ModalController: React.FC = () => {
  const { modalName } = useModal();

  const Modals: IElementMap = {
    ModalQuestion: <ModalQuestion />,
  };

  return Modals[modalName] || <></>;
};
