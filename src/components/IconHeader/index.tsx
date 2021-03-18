import React from 'react';
import { IIconHeader } from './data';
import { IconHeader as Layout } from './Layout';

export const IconHeader: React.FC<IIconHeader> = props => <Layout {...props} />;