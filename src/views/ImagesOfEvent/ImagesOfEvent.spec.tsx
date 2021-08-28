import * as React from 'react';
import { ImagesOfEvent } from './';
import { render, fireEvent } from '@testing-library/react-native';

import { mockDaysData } from '~/utils';

const mockFN = jest.fn();
const mockBackFN = jest.fn();
const mockEventFN = jest.fn();
const mockOpenFN = jest.fn();
const mockDefineFN = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockFN,
    }),
  };
});

jest.mock('../../hooks/Modal', () => {
  return {
    useModal: () => ({
      openModal: mockOpenFN,
      defineFunctions: mockDefineFN,
    }),
  };
});

jest.mock('../../hooks/Event', () => {
  return {
    useEvent: () => ({
      currentEvent: mockDaysData.monday.events[0],
      setImageIndex: mockEventFN,
    }),
  };
});

describe('Render ImagesOfEvent', () => {
  it('Should be ImagesOfEvent exist', () => {
    const { getByTestId } = render(<ImagesOfEvent />);
    const currentElement = getByTestId(`ImagesOfEvent`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be ImagesOfEventList exist', () => {
    const { getByTestId } = render(<ImagesOfEvent />);
    const currentElement = getByTestId(`ImagesOfEventList`);
    expect(currentElement).toBeTruthy();
  });

  it('Validate ImagesOfEventList length', () => {
    const { getAllByTestId } = render(<ImagesOfEvent />);
    const listElements = getAllByTestId(`ImagesOfEventListItem`);
    expect(listElements).toBeTruthy();
    expect(listElements).toHaveLength(
      mockDaysData.monday.events[0].images.length
    );
  });

  it('Validate ImagesOfEventListItem press', () => {
    const { getAllByTestId } = render(<ImagesOfEvent />);
    const listElements = getAllByTestId(`ImagesOfEventListItem`);
    expect(listElements).toBeTruthy();
    fireEvent.press(listElements[1]);
    expect(mockEventFN).toBeCalled();
    expect(mockEventFN).toHaveBeenCalledWith(1);
    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledWith('ShowImages');
  });

  it('Validate ActionButton press', () => {
    const { getByTestId } = render(<ImagesOfEvent />);
    const currentElement = getByTestId(`ActionButton`);
    expect(currentElement).toBeTruthy();
    fireEvent.press(currentElement);
    expect(mockDefineFN).toBeCalled();
    expect(mockDefineFN).toHaveBeenCalledWith([expect.any(Function)]);
    expect(mockOpenFN).toBeCalled();
    expect(mockOpenFN).toHaveBeenCalledWith('ModalQuestion');
    expect(mockBackFN).toBeCalled();
  });
});
