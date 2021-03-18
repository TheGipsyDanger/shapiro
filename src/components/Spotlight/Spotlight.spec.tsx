import React from 'react';
import { Spotlight }from './';
import { render } from '@testing-library/react-native';

describe('Render Spotlight', () => {
  it('Should be Spotlight exist', () => {
    const { getByTestId } = render(<Spotlight />);
    const currentElement = getByTestId(`Spotlight`);
    expect(currentElement).toBeTruthy();
  });
});