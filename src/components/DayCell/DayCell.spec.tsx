import * as React from 'react';
import { DayCell } from './';
import { render, fireEvent } from '@testing-library/react-native';

const mockFN = jest.fn();

const props = {
  day: 'tuesday',
  events: 12,
  press: mockFN,
};

describe('Render DayCelll', () => {
  it('Should be DayCelll exist', () => {
    const { getByTestId } = render(<DayCell {...props} />);
    const currentElement = getByTestId('DayCell');
    expect(currentElement).toBeTruthy();
  });

  it('Should be DayCell have a correct text', () => {
    const { getByTestId } = render(<DayCell {...props} />);
    const titleText = getByTestId(`DayCellTitle`);
    const subtitleText = getByTestId(`DayCellSubtitle`);
    expect(titleText.props.children).toEqual('tuesday');
    expect(subtitleText.props.children).toEqual('12 events');
  });

  it('Should be DayCell press', () => {
    const { getByTestId } = render(<DayCell {...props} />);
    const currentElement = getByTestId(`DayCell`);
    fireEvent.press(currentElement);
    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledWith('tuesday');
  });
});
