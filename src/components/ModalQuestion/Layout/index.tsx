import * as React from 'react';

import { Button } from '~/components/Button';
import { Wrapped } from '~/components/Base';
import { ModalTitle, ModalDescription } from '~/components/Base/Modal';

import { IModalQuestionLayout } from '@/ModalQuestion';

export const ModalQuestion = ({ cancel, remove }: IModalQuestionLayout) => (
  <Wrapped testID={`ModalQuestion`}>
    <ModalTitle>{'Delete this event?'}</ModalTitle>
    <ModalDescription>{'Photos remain on your device.'}</ModalDescription>
    <Wrapped flexDirection="row">
      <Wrapped flex={1} />
      <Wrapped flex={1}>
        <Button title="Cancel" onPress={cancel} type="clean" />
      </Wrapped>
      <Wrapped mx={1} />
      <Wrapped flex={1}>
        <Button title="Delete" onPress={remove} />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
