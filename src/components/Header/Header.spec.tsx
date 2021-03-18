import React from 'react';
import { Header } from './';
import { render } from '@testing-library/react-native';

describe('Render Header', () => {
  it('Should be Header exist', () => {
    const { getByTestId } = render(<Header />);
    const currentElement = getByTestId('Header');
    expect(currentElement).toBeTruthy();
  });
});
