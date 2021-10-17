import * as React from 'react';
import { Modal } from '~/components/Base';

import { useEvent, useModal, useAlert } from '~/hooks';
import { createEventFactory, createDaysFactory } from '~/utils';

import { IModalQuestion } from '@/ModalQuestion';
import { ModalQuestion as Layout } from './Layout';

export const ModalQuestion = (props: IModalQuestion) => {
  const { currentEvent, selectedDay, days, updateDays } = useEvent();
  const { closeModal, functions, defineFunctions } = useModal();
  const { showAlert } = useAlert();

  const Event = createEventFactory(selectedDay);
  const Days = createDaysFactory(days);

  function remove() {
    const { name, id } = currentEvent;

    const days = Days.updateDay(Event.deleteEvent(id));
    updateDays(days);

    functions[0]();
    defineFunctions([() => {}]);

    closeModal();

    showAlert({
      title: `${name} deleted`,
      message: 'Successfully delete event.',
      type: 'success',
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
