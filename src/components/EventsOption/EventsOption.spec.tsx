import React from 'react';
import { EventsOption }from './';
import { render } from '@testing-library/react-native';

describe('Render EventsOption', () => {
  it('Should be EventsOption exist', () => {
    const { getByTestId } = render(<EventsOption />);
    const currentElement = getByTestId(`EventsOption`);
    expect(currentElement).toBeTruthy();
  });
});