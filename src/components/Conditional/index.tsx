import * as React from 'react';
import { IConditional } from './data';
import { Conditional as Layout } from './Layout';

export const Conditional = (props: IConditional) => <Layout {...props} />;
