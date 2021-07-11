import React from 'react';
import { IHeader } from './data';
import { Header as Layout } from './Layout';

export const Header: React.FC<IHeader> = props => <Layout {...props} />;
