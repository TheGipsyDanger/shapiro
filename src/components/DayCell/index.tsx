import * as React from 'react';
import { IDayCell } from './data';
import { DayCell as Layout } from './Layout';

export const DayCell: React.FC<IDayCell> = props => <Layout {...props} />;
