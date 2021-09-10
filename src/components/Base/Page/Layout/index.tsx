import * as React from 'react';
import { Platform } from 'react-native';

import { Wrapped } from '~/components/Base/Wrapped';

import { IPageLayout } from '@/Page';
import * as C from './styles';

export const Page: React.FC<IPageLayout> = ({
  children,
  bg = 'white',
  ...props
}) => {
  return (
    <C.SafeAreaStyled bg={'transparent'}>
      <C.KeyboardAvoidStyled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Wrapped flex={1} bg={bg} {...props}>
          {children}
        </Wrapped>
      </C.KeyboardAvoidStyled>
    </C.SafeAreaStyled>
  );
};
