import React from 'react';
import { CreateEvent } from './';
import { render } from '@testing-library/react-native';

describe('Render CreateEvent', () => {
  it('Should be CreateEvent exist', () => {
    const { getByTestId } = render(<CreateEvent />);
    const currentElement = getByTestId(`CreateEvent`);
    expect(currentElement).toBeTruthy();
  });
});