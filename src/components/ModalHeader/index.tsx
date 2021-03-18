import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { IModalHeader } from './data';
import { ModalHeader as Layout } from './Layout';

export const ModalHeader: React.FC<IModalHeader> = props => {
  const navigation = useNavigation();

  const layoutProps = {
    ...props,
    onPress: () => navigation.goBack(),
  };

  return <Layout {...layoutProps} />;
};
