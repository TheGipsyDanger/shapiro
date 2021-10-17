import * as React from 'react';

import { Text } from '~/components/Base';

import { IFormErrorLayout } from '@/FormError';

export const FormError = ({ error }: IFormErrorLayout) => (
  <Text color="red" size={3} mt={1}>
    {error}
  </Text>
);
