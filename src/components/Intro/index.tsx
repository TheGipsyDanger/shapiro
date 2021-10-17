import * as React from 'react';

import { IIntro, componentData } from './data';
import { Intro as Layout } from './Layout';

export const Intro = (props: IIntro) => {
  const layoutProps = {
    ...props,
    data: componentData.SLIDES,
  };

  return <Layout {...layoutProps} />;
};
