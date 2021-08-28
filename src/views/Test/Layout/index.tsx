import * as React from 'react';
import { TextInput } from 'react-native';

import { Page, Wrapped, Text } from '../../../components';

import { ITestLayout } from '../data';
import C from './styles';

export const Test: React.FC<ITestLayout> = ({ data }) => (
  <Page>
    {/* <Wrapped flex={1} bg={'orange'}>
      <Wrapped flex={1} bg={'red'}>
        <Wrapped p={8} bg={'blue'}>
          <Text>Olá</Text>
        </Wrapped>
        <Wrapped p={8} bg={'green'}>
          <Text>Olá</Text>
        </Wrapped>
        <Wrapped p={8} bg={'yellow'}>
          <Text>Olá</Text>
        </Wrapped>
      </Wrapped>
      <Wrapped>
        <TextInput
          placeholder="renan"
          style={{
            borderWidth: 1,
            paddingVertical: 20,
            paddingHorizontal: 8,
          }}
        />
        <TextInput
          placeholder="renan 2"
          style={{
            borderWidth: 1,
            paddingVertical: 20,
            paddingHorizontal: 8,
          }}
        />
      </Wrapped>
    </Wrapped> */}
  </Page>
);
