import React from 'react';
import { Conditional }from './';
import { render } from '@testing-library/react-native';

describe('Render Conditional', () => {
  it('Should be Conditional exist', () => {
    const { getByTestId } = render(<Conditional />);
    const currentElement = getByTestId(`Conditional`);
    expect(currentElement).toBeTruthy();
  });
});