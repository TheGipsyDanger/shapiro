import * as React from 'react';

import { IWrapped } from '@/Wrapped';
import { Wrapped as Layout } from './Layout';

export const Wrapped: React.FC<IWrapped> = props => <Layout {...props} />;
