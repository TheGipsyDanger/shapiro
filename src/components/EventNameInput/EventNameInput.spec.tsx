import React from 'react';
import { EventNameInput }from './';
import { render } from '@testing-library/react-native';

describe('Render EventNameInput', () => {
  it('Should be EventNameInput exist', () => {
    const { getByTestId } = render(<EventNameInput />);
    const currentElement = getByTestId(`EventNameInput`);
    expect(currentElement).toBeTruthy();
  });
});