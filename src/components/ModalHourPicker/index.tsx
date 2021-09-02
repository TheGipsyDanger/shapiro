import * as React from 'react';
import { useState } from 'react';
import moment from 'moment';

import { Modal } from '~/components/Base';
import { useModal } from '~/hooks';

import { IModalHourPicker } from './data';
import { ModalHourPicker as Layout } from './Layout';

export const ModalHourPicker: React.FC<IModalHourPicker> = props => {
  const { defineCtx, closeModal } = useModal();

  const [date, setDate] = useState<Date>(new Date());

  const press = () => {
    closeModal();
  };

  const onChange = (_: any, date: object) => {
    const dateSting = dateFormatter(date);
    console.log('Selected Date: ', dateSting);
  };

  const dateFormatter = (date: object): string =>
    moment(date, 'DD-MM-YYYY').format('HH:mm');

  const layoutProps = {
    ...props,
    date,
    press,
    onChange,
  };

  return (
    <Modal color={'#fff'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
