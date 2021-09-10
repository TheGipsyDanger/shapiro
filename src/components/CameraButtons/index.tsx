import * as React from 'react';

import { ICameraButtons } from '@/CameraButtons';
import { CameraButtons as Layout } from './Layout';

export const CameraButtons: React.FC<ICameraButtons> = props => {
  return <Layout {...props} />;
};
