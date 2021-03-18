import * as React from 'react';
import { ICameraButtons } from './data';
import { CameraButtons as Layout } from './Layout';

export const CameraButtons: React.FC<ICameraButtons> = props => {
  return <Layout {...props} />;
};
