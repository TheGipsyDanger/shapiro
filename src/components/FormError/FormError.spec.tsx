import React from 'react';
import { FormError }from './';
import { render } from '@testing-library/react-native';

describe('Render FormError', () => {
  it('Should be FormError exist', () => {
    const { getByTestId } = render(<FormError />);
    const currentElement = getByTestId(`FormError`);
    expect(currentElement).toBeTruthy();
  });
});