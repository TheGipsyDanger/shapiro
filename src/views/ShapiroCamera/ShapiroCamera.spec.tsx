import React from 'react';
import { ShapiroCamera } from './';
import { render } from '@testing-library/react-native';

describe('Render ShapiroCamera', () => {
  it('Should be ShapiroCamera exist', () => {
    const { getByTestId } = render(<ShapiroCamera />);
    const currentElement = getByTestId(`ShapiroCamera`);
    expect(currentElement).toBeTruthy();
  });
});