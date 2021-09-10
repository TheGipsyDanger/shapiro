import * as React from 'react';

import { ITest } from '@/Test';
import { Test as Layout } from './Layout';

export const Test: React.FC<ITest> = props => <Layout {...props} />;
