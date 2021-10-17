import * as React from 'react';

import { IHeader } from '@/Header';
import { Header as Layout } from './Layout';

export const Header = (props: IHeader) => <Layout {...props} />;
