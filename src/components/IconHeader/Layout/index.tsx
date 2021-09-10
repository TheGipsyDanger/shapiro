import * as React from 'react';

import { IIconHeaderLayout } from '@/IconHeader';
import C from './styles';

export const IconHeader: React.FC<IIconHeaderLayout> = ({}) => (
  <C.Container testID={`IconHeader`}>
    <C.Text>{`IconHeader`}</C.Text>
  </C.Container>
);
