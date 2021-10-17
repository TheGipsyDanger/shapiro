import * as React from 'react';

import { IShowImages } from '@/ShowImages';
import { ShowImages as Layout } from './Layout';

export const ShowImages: React.FC<IShowImages> = props => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
