import React from 'react';
import { HourInput }from './';
import { render } from '@testing-library/react-native';

describe('Render HourInput', () => {
  it('Should be HourInput exist', () => {
    const { getByTestId } = render(<HourInput />);
    const currentElement = getByTestId(`HourInput`);
    expect(currentElement).toBeTruthy();
  });
});