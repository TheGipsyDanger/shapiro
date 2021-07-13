import React from 'react';
import { ModalQuestion }from './';
import { render } from '@testing-library/react-native';

describe('Render ModalQuestion', () => {
  it('Should be ModalQuestion exist', () => {
    const { getByTestId } = render(<ModalQuestion />);
    const currentElement = getByTestId(`ModalQuestion`);
    expect(currentElement).toBeTruthy();
  });
});