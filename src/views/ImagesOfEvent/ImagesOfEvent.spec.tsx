import React from 'react';
import { ImagesOfEvent } from './';
import { render } from '@testing-library/react-native';

describe('Render ImagesOfEvent', () => {
  it('Should be ImagesOfEvent exist', () => {
    const { getByTestId } = render(<ImagesOfEvent />);
    const currentElement = getByTestId(`ImagesOfEvent`);
    expect(currentElement).toBeTruthy();
  });
});