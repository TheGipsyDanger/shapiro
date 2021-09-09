import * as React from 'react';

import { Button } from '~/components/Button';
import { Wrapped } from '~/components/Base';
import { ModalTitle, ModalDescription } from '~/components/Base/Modal';

import { IModalQuestionLayout } from '../data';

export const ModalQuestion: React.FC<IModalQuestionLayout> = ({
  cancel,
  remove,
}) => (
  <Wrapped testID={`ModalQuestion`}>
    <ModalTitle>{'Deletar esse item?'}</ModalTitle>
    <ModalDescription>
      {
        'As fotos ainda ficaram salvas no seu device, só não estará mais no shapiro.'
      }
    </ModalDescription>
    <Wrapped flexDirection="row">
      <Wrapped flex={1} />
      <Wrapped flex={1}>
        <Button title="Cancelar" onPress={cancel} />
      </Wrapped>
      <Wrapped mx={1} />
      <Wrapped flex={1}>
        <Button title="Deletar" onPress={remove} />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
