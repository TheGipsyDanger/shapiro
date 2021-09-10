import * as React from 'react';

import { ICard } from '@/Card';
import { Card as Layout } from './Layout';

export const Card: React.FC<ICard> = props => <Layout {...props} />;
