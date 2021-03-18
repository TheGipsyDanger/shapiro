import React from 'react';
import { CameraButtons } from './';
import { render } from '@testing-library/react-native';

describe('Render CameraButtons', () => {
  it('Should be CameraButtons exist', () => {
    const { getByTestId } = render(<CameraButtons />);
    const currentElement = getByTestId(`CameraButtons`);
    expect(currentElement).toBeTruthy();
  });
});
