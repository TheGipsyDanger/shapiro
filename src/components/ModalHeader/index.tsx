import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { IModalHeader } from '@/ModalHeader';
import { ModalHeader as Layout } from './Layout';

export const ModalHeader = (props: IModalHeader) => {
  const navigation = useNavigation();

  const layoutProps = {
    ...props,
    onPress: () => navigation.goBack(),
  };

  return <Layout {...layoutProps} />;
};
