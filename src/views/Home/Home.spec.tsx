import * as React from 'react';
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
      spotlightDay: 'monday',
      setSelectedDay: mockEventFN,
    }),
  };
});

jest.mock('../../hooks/Date', () => {
  return {
    useDate: () => ({
      date: {
        dayName: 'Monday',
      },
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
  goToCreateEvent: mockActionFN,
  goToCamera: mockActionFN,
};

describe('Render Home', () => {
  beforeEach(() => {
    mockFN.mockClear();
  });

  it('Should be Home is Correct', () => {
    const { getByTestId } = render(<Home />);
    const element = getByTestId('Home');
    expect(element).toBeTruthy();
  });

  it('Should Home navigate to EventsOfDay', () => {
    const { getAllByTestId } = render(<Home />);
    const listElements = getAllByTestId('DayCell');

    expect(listElements).toBeTruthy();
    fireEvent.press(listElements[0]);

    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledTimes(1);
    expect(mockFN).toHaveBeenCalledWith('EventsOfDay');
  });

  it('Should Home navigate to Create Event', () => {
    const { getByTestId } = render(<Home />);
    const element = getByTestId('AddEvent');

    expect(element).toBeTruthy();
    fireEvent.press(element);

    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledTimes(1);
    expect(mockFN).toHaveBeenCalledWith('CreateEvent');
  });

  it('Should Home navigate to Camera', () => {
    const { getByTestId } = render(<Home />);
    const element = getByTestId('ActionButton');

    expect(element).toBeTruthy();
    fireEvent.press(element);

    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledTimes(1);
    expect(mockFN).toHaveBeenCalledWith('ShapiroCamera');
  });
});

describe('Render HomeLayout', () => {
  it('Should be HomeList exist', () => {
    const { getByTestId } = render(<HomeLayout {...props} />);
    const currentElement = getByTestId('HomeList');
    expect(currentElement).toBeTruthy();
  });

  it('Validate HomeList length', () => {
    const { getAllByTestId } = render(<HomeLayout {...props} />);
    const listElements = getAllByTestId('DayCell');
    expect(listElements).toBeTruthy();
    expect(listElements).toHaveLength(7);
  });

  it('Validate HomeList length 2', () => {
    const { getAllByTestId } = render(<HomeLayout {...props} />);
    const listElements = getAllByTestId('DayCellTitle');
    expect(listElements).toBeTruthy();
    expect(listElements[0].props.children).toBe('Mon');
    expect(listElements[1].props.children).toBe('Tue');
    expect(listElements[2].props.children).toBe('Wed');
    expect(listElements[3].props.children).toBe('Thu');
    expect(listElements[4].props.children).toBe('Fri');
    expect(listElements[5].props.children).toBe('Sat');
    expect(listElements[6].props.children).toBe('Sun');
  });

  it('Should be HomeListItem Press', () => {
    const { getAllByTestId } = render(<HomeLayout {...props} />);
    const listElements = getAllByTestId('DayCell');
    fireEvent.press(listElements[0]);
    expect(mockActionFN).toBeCalled();
    expect(mockActionFN).toHaveBeenCalledWith('monday');
  });

  it('Should be HomeListItem Press', () => {
    const { getAllByTestId } = render(<HomeLayout {...props} />);
    const listElements = getAllByTestId('DayCell');
    fireEvent.press(listElements[0]);
    expect(mockActionFN).toBeCalled();
    expect(mockActionFN).toHaveBeenCalledWith('monday');
  });
});
