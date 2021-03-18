import React from 'react';
import { IHourInput } from './data';
import { HourInput as Layout } from './Layout';

export const HourInput: React.FC<IHourInput> = props => <Layout {...props} />;