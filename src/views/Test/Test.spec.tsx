import React from 'react';
import { Test } from './';
import { render } from '@testing-library/react-native';

describe('Render Test', () => {
  it('Should be Test exist', () => {
    const { getByTestId } = render(<Test />);
    const currentElement = getByTestId(`Test`);
    expect(currentElement).toBeTruthy();
  });
});