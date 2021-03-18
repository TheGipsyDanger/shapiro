import React from 'react';
import { HorizontalCarousel }from './';
import { render } from '@testing-library/react-native';

describe('Render HorizontalCarousel', () => {
  it('Should be HorizontalCarousel exist', () => {
    const { getByTestId } = render(<HorizontalCarousel />);
    const currentElement = getByTestId(`HorizontalCarousel`);
    expect(currentElement).toBeTruthy();
  });
});