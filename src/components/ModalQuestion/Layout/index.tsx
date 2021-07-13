import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';

import { IModalQuestionLayout } from '../data';
import C from './styles';

export const ModalQuestion: React.FC<IModalQuestionLayout> = () => (
  <Wrapped testID={`ModalQuestion`}>
    <Text>{`ModalQuestion`}</Text>
  </Wrapped>
);
