import * as React from 'react';
import { Modal } from '~/components/Base';

import { IModalQuestion } from './data';
import { ModalQuestion as Layout } from './Layout';

export const ModalQuestion: React.FC<IModalQuestion> = props => {
  const cancel = () => {
    alert('fechar modal');
  };

  const remove = () => {
    alert('deletar item');
  };

  const layoutProps = {
    ...props,
    cancel,
    remove,
  };

  return (
    <Modal type={'default'} hasBackdrop={true} hasClosableButton={false}>
      <Layout {...layoutProps} />
    </Modal>
  );
};
