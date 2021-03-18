import React from 'react';
import { IFormError } from './data';
import { FormError as Layout } from './Layout';

export const FormError: React.FC<IFormError> = props => <Layout {...props} />;