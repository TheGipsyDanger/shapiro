import * as React from 'react';
import { IDayInput } from './data';
import { DayInput as Layout } from './Layout';

export const DayInput: React.FC<IDayInput> = props => <Layout {...props} />;
