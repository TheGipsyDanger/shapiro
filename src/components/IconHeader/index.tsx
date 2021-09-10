import * as React from 'react';

import { IIconHeader } from '@/IconHeader';
import { IconHeader as Layout } from './Layout';

export const IconHeader: React.FC<IIconHeader> = props => <Layout {...props} />;
