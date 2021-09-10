import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';

import { Modal } from '~/components/Base';
import { useModal, useCreateEvent } from '~/hooks';

import { IModalHourPicker } from '@/ModalHourPicker';
import { ModalHourPicker as Layout } from './Layout';

export const ModalHourPicker: React.FC<IModalHourPicker> = props => {
  const { type, setHour: setDateHook } = useCreateEvent();
  const { closeModal } = useModal();

  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const dateString = dateFormatter(date);
    setDateHook(dateString);
  }, []);

  function onChange(_: any, date: Date) {
    const dateString = dateFormatter(date);
    setDate(date);
    setDateHook(dateString);
  }

  function dateFormatter(date: object): string {
    return moment(date, 'DD-MM-YYYY').format('HH:mm');
  }

  const title = type === 'start' ? 'Start at:' : 'End at:';

  const layoutProps = {
    ...props,
    date,
    title,
    onChange,
    closeModal,
  };

  return (
    <Modal color={'#fff'}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
