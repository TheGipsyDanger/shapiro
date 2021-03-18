import React from 'react';
import { Toast }from './';
import { render } from '@testing-library/react-native';

describe('Render Toast', () => {
  it('Should be Toast exist', () => {
    const { getByTestId } = render(<Toast />);
    const currentElement = getByTestId(`Toast`);
    expect(currentElement).toBeTruthy();
  });
});