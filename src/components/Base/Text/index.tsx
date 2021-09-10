import * as React from 'react';

import { IText } from '@/Text';
import { Text as Layout } from './Layout';

export const Text: React.FC<IText> = props => <Layout {...props} />;
