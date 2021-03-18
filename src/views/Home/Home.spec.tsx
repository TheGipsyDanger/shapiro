import React from 'react';
import { Home } from './';
import { Home as HomeLayout } from './Layout';
import { render, fireEvent } from '@testing-library/react-native';
import { createDaysFactory } from '~/utils';
import { mockDaysData } from '~/utils/Mocks/Events';

const Days = createDaysFactory(mockDaysData);
const daysWithEvents = Days.daysWithEvents();

const mockFN = jest.fn();
const mockEventFN = jest.fn();
const mockActionFN = jest.fn();

jest.mock('../../hooks/Event', () => {
  return {
    useEvent: () => ({
      days: mockDaysData,
      setSelectedDay: mockEventFN,
    }),
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockFN,
    }),
  };
});

const props = {
  days: daysWithEvents,
  selectDay: mockActionFN,
};

describe('Render Home', () => {
  it('Should be Home is Correct', () => {
    const { getByTestId } = render(<Home />);
    const currentElement = getByTestId('Home');
    expect(currentElement).toBeTruthy();
  });

  it('Should be Home navigate to EventsOfDay', () => {
    const { getAllByTestId } = render(<Home />);
    const listElements = getAllByTestId('DayCell');
    fireEvent.press(listElements[0]);
    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledWith('EventsOfDay');
  });
});

describe('Render HomeLayout', () => {
  it('Should be Home exist', () => {
    const { getByTestId } = render(<HomeLayout {...props} />);
    const currentElement = getByTestId('Home');
    expect(currentElement).toBeTruthy();
  });

  it('Should be HomeList exist', () => {
    const { getByTestId } = render(<HomeLayout {...props} />);
    const currentElement = getByTestId('HomeList');
    expect(currentElement).toBeTruthy();
  });

  it('Validate HomeList length', () => {
    const { getAllByTestId } = render(<HomeLayout {...props} />);
    const listElements = getAllByTestId('DayCell');
    expect(listElements).toHaveLength(7);
  });

  it('Should be HomeListItem Press', () => {
    const { getAllByTestId } = render(<HomeLayout {...props} />);
    const listElements = getAllByTestId('DayCell');
    fireEvent.press(listElements[0]);
    expect(mockActionFN).toBeCalled();
    expect(mockActionFN).toHaveBeenCalledWith('monday');
  });
});
