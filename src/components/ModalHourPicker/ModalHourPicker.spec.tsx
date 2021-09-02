import React from 'react';
import { ModalHourPicker }from './';
import { render } from '@testing-library/react-native';

describe('Render ModalHourPicker', () => {
  it('Should be ModalHourPicker exist', () => {
    const { getByTestId } = render(<ModalHourPicker />);
    const currentElement = getByTestId(`ModalHourPicker`);
    expect(currentElement).toBeTruthy();
  });
});