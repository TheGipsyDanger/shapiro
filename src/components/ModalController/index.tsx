import * as React from 'react';

import { ModalQuestion } from '~/components/ModalQuestion';
import { ModalHourPicker } from '~/components/ModalHourPicker';

import { useModal } from '~/hooks';
import { IElementMap } from '~/utils';

export const ModalController = () => {
  const { modalName } = useModal();

  const Modals: IElementMap = {
    ModalQuestion: <ModalQuestion />,
    ModalHourPicker: <ModalHourPicker />,
  };

  return Modals[modalName] || <></>;
};
