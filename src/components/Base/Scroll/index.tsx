import * as React from 'react';

import { IScroll } from '@/Scroll';
import { Scroll as Layout } from './Layout';

export const Scroll: React.FC<IScroll> = props => <Layout {...props} />;
