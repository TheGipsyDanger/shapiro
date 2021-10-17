import React from 'react';
import { Gallery }from './';
import { render } from '@testing-library/react-native';

describe('Render Gallery', () => {
  it('Should be Gallery exist', () => {
    const { getByTestId } = render(<Gallery />);
    const currentElement = getByTestId(`Gallery`);
    expect(currentElement).toBeTruthy();
  });
});