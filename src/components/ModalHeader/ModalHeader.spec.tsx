import React from 'react';
import { ModalHeader }from './';
import { render } from '@testing-library/react-native';

describe('Render ModalHeader', () => {
  it('Should be ModalHeader exist', () => {
    const { getByTestId } = render(<ModalHeader />);
    const currentElement = getByTestId(`ModalHeader`);
    expect(currentElement).toBeTruthy();
  });
});