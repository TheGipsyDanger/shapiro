import * as React from 'react';

import { ICameraButtons } from '@/CameraButtons';
import { CameraButtons as Layout } from './Layout';

export const CameraButtons = (props: ICameraButtons) => <Layout {...props} />;
