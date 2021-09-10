import * as React from 'react';

import { IHeader } from '@/Header';
import { Header as Layout } from './Layout';

export const Header: React.FC<IHeader> = props => <Layout {...props} />;
