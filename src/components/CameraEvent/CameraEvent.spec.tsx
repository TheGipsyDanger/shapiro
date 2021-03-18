import React from 'react';
import { CameraEvent }from './';
import { render } from '@testing-library/react-native';

describe('Render CameraEvent', () => {
  it('Should be CameraEvent exist', () => {
    const { getByTestId } = render(<CameraEvent />);
    const currentElement = getByTestId(`CameraEvent`);
    expect(currentElement).toBeTruthy();
  });
});