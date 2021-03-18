import React from 'react';
import { ShowImages } from './';
import { render } from '@testing-library/react-native';

describe('Render ShowImages', () => {
  it('Should be ShowImages exist', () => {
    const { getByTestId } = render(<ShowImages />);
    const currentElement = getByTestId(`ShowImages`);
    expect(currentElement).toBeTruthy();
  });
});