import React from 'react';
import { ITest } from './data';
import { Test as Layout } from './Layout';

export const Test: React.FC<ITest> = props => <Layout {...props} />;