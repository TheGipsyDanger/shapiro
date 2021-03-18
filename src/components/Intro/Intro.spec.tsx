import React from 'react';
import { Intro }from './';
import { render } from '@testing-library/react-native';

describe('Render Intro', () => {
  it('Should be Intro exist', () => {
    const { getByTestId } = render(<Intro />);
    const currentElement = getByTestId(`Intro`);
    expect(currentElement).toBeTruthy();
  });
});