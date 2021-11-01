import * as React from 'react';
import { PromotionalSlider } from './';
import { Indicator } from './Layout/Indicator';
import { render, fireEvent } from '@testing-library/react-native';

import { generateIndicatorArray } from '~/utils';

const mockFN = jest.fn();

describe('Render PromotionalSlider', () => {
  it('Should be PromotionalSlider exist', () => {
    const { getByTestId } = render(<PromotionalSlider />);
    const currentElement = getByTestId(`PromotionalSlider`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be Slider exist', () => {
    const { getByTestId } = render(<PromotionalSlider />);
    const currentElement = getByTestId(`PromotionalSlider:Slider`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be Slider has a correct length', () => {
    const { getAllByTestId } = render(<PromotionalSlider />);
    const listElements = getAllByTestId(`PromotionalSlider:Slider.Item`);
    expect(listElements).toBeTruthy();
    expect(listElements).toHaveLength(10);
  });

  it('Should be Indicator exist', () => {
    const { getByTestId } = render(<PromotionalSlider />);
    const currentElement = getByTestId(`PromotionalSlider:Indicator`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be Indicator has a correct length', () => {
    const { getAllByTestId } = render(<PromotionalSlider />);
    const listElements = getAllByTestId(`PromotionalSlider:Indicator.Item`);
    expect(listElements).toBeTruthy();
    expect(listElements).toHaveLength(4);
  });
});

describe('Indicator actions', () => {
  it('when Indicator:Item is pressed', () => {
    const mockFN = jest.fn();
    const mockIndicatorFN = jest.fn();
    const indicatorImages = generateIndicatorArray();

    const { getAllByTestId } = render(
      <Indicator
        isSelect={mockFN}
        indicatorImages={indicatorImages}
        indicatorPress={mockIndicatorFN}
      />
    );
    const listElements = getAllByTestId(`PromotionalSlider:Indicator.Item`);

    expect(listElements).toBeTruthy();

    fireEvent.press(listElements[0]);
    expect(mockIndicatorFN).toBeCalled();
    expect(mockIndicatorFN).toHaveBeenCalledTimes(1);
    expect(mockIndicatorFN).toHaveBeenCalledWith(0);

    fireEvent.press(listElements[2]);
    expect(mockIndicatorFN).toBeCalled();
    expect(mockIndicatorFN).toHaveBeenCalledTimes(2);
    expect(mockIndicatorFN).toHaveBeenCalledWith(2);
  });
});
