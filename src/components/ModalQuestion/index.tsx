import * as React from 'react';
import { Modal } from '~/components/Base';

import { IModalQuestion } from './data';
import { ModalQuestion as Layout } from './Layout';

export const ModalQuestion: React.FC<IModalQuestion> = props => {
  return (
    <Modal type={'default'} hasBackdrop={true} hasClosableButton={true}>
      <Layout {...props} />
    </Modal>
  );
};
