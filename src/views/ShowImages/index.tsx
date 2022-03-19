import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { IShowImages } from '@/ShowImages';
import { ShowImages as Layout } from './Layout';

export const ShowImages = (props: IShowImages) => {
  const navigation = useNavigation();

  const layoutProps = {
    ...props,
    goBack: () => navigation.goBack(),
  };

  return <Layout {...layoutProps} />;
};
