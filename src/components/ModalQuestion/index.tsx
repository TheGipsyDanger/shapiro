import * as React from 'react';
import Toast from 'react-native-toast-message';

import { Modal } from '~/components/Base';

import { useEvent, useModal } from '~/hooks';
import { createEventFactory, createDaysFactory } from '~/utils';

import { IModalQuestion } from '@/ModalQuestion';
import { ModalQuestion as Layout } from './Layout';

export const ModalQuestion = (props: IModalQuestion) => {
  const { currentEvent, selectedDay, days, updateDays } = useEvent();
  const { closeModal, functions, defineFunctions } = useModal();

  const Event = createEventFactory(selectedDay);
  const Days = createDaysFactory(days);

  function remove() {
    const { name, id } = currentEvent;

    const days = Days.updateDay(Event.deleteEvent(id));
    updateDays(days);

    functions[0]();
    defineFunctions([() => {}]);

    closeModal();

    Toast.show({
      type: 'success',
      text1: `${name} deleted`,
      text2: 'Successfully delete event.',
    });
  }

  function cancel() {
    closeModal();
    defineFunctions([() => {}]);
  }

  const layoutProps = {
    ...props,
    remove,
    cancel,
  };

  return (
    <Modal type={'default'} hasBackdrop={true} hasClosableButton={false}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
