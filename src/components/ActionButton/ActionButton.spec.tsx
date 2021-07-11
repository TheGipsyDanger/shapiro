import React from 'react';
import { ActionButton }from './';
import { render } from '@testing-library/react-native';

describe('Render ActionButton', () => {
  it('Should be ActionButton exist', () => {
    const { getByTestId } = render(<ActionButton />);
    const currentElement = getByTestId(`ActionButton`);
    expect(currentElement).toBeTruthy();
  });
});