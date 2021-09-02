import * as React from 'react';
import { Button } from 'react-native';
import { useState } from 'react';

import { Page } from '../../../components';
import { useModal } from '../../../hooks';

import { ITestLayout } from '../data';

export const Test: React.FC<ITestLayout> = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const { openModal } = useModal();

  const press = () => {
    openModal('ModalHourPicker');
  };

  return (
    <Page>
      <Button
        title={'Renan'}
        onPress={() => openModal('ModalHourPicker')}></Button>
    </Page>
  );
};
