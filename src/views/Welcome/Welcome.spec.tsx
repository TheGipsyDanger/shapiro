import React from 'react';
import { Welcome } from './';
import { render } from '@testing-library/react-native';

describe('Render Welcome', () => {
  it('Should be Welcome exist', () => {
    const { getByTestId } = render(<Welcome />);
    const currentElement = getByTestId(`Welcome`);
    expect(currentElement).toBeTruthy();
  });
});