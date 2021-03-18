import React from 'react';
import { DayInput }from './';
import { render } from '@testing-library/react-native';

describe('Render DayInput', () => {
  it('Should be DayInput exist', () => {
    const { getByTestId } = render(<DayInput />);
    const currentElement = getByTestId(`DayInput`);
    expect(currentElement).toBeTruthy();
  });
});