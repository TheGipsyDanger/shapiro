import React from 'react';
import { Button }from './';
import { render } from '@testing-library/react-native';

describe('Render Button', () => {
  it('Should be Button exist', () => {
    const { getByTestId } = render(<Button />);
    const currentElement = getByTestId(`Button`);
    expect(currentElement).toBeTruthy();
  });
});