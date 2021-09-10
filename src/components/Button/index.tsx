import * as React from 'react';

import { IButton } from '@/Button';
import { Button as Layout } from './Layout';

export const Button: React.FC<IButton> = props => <Layout {...props} />;
