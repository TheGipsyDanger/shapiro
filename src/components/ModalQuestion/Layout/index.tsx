import * as React from 'react';

import { Button } from '~/components';
import { Wrapped, Text } from '~/components/Base';
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
    <Wrapped flexDirection="row" justifyContent="flex-end">
      <Button title="Cancelar" onPress={cancel} color="black" />
      <Wrapped mx={1} />
      <Button title="Deletar" onPress={remove} />
    </Wrapped>
  </Wrapped>
);
