import React from 'react';
import { IconHeader }from './';
import { render } from '@testing-library/react-native';

describe('Render IconHeader', () => {
  it('Should be IconHeader exist', () => {
    const { getByTestId } = render(<IconHeader />);
    const currentElement = getByTestId(`IconHeader`);
    expect(currentElement).toBeTruthy();
  });
});