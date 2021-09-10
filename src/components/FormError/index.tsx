import * as React from 'react';

import { IFormError } from '@/FormError';
import { FormError as Layout } from './Layout';

export const FormError: React.FC<IFormError> = props => <Layout {...props} />;
