import React from 'react';
import { HomeHeader }from './';
import { render } from '@testing-library/react-native';

describe('Render HomeHeader', () => {
  it('Should be HomeHeader exist', () => {
    const { getByTestId } = render(<HomeHeader />);
    const currentElement = getByTestId(`HomeHeader`);
    expect(currentElement).toBeTruthy();
  });
});