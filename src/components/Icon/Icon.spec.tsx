import React from 'react';
import { Icon }from './';
import { render } from '@testing-library/react-native';

describe('Render Icon', () => {
  it('Should be Icon exist', () => {
    const { getByTestId } = render(<Icon />);
    const currentElement = getByTestId(`Icon`);
    expect(currentElement).toBeTruthy();
  });
});