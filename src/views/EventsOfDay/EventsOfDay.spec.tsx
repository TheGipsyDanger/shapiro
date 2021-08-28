import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { mockDaysData } from '~/utils';

import { EventsOfDay } from './';
import { EventsOfDay as EventsOfDayLayout } from './Layout';

const mockFN = jest.fn();
const mockActionOneFN = jest.fn();
const mockActionFN = jest.fn();

const events = mockDaysData.monday.events;

jest.mock('../../hooks/Event', () => {
  return {
    useEvent: () => ({
      setCurrentEvent: mockActionOneFN,
      selectedDay: {
        monday: {
          events: mockDaysData.monday.events,
        },
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

const layoutProps = {
  selectEvent: mockActionFN,
  headerTitle: 'monday',
  events,
};

describe('Render EventsOfDay', () => {
  beforeEach(() => {
    mockDaysData.monday.events = events;
  });

  it('Should be EventsOfDay exist', () => {
    const { getByTestId } = render(<EventsOfDay />);
    const currentElement = getByTestId(`EventsOfDay`);
    expect(currentElement).toBeTruthy();
  });

  it('Should header exist with correct title according to the events', () => {
    const { getByTestId } = render(<EventsOfDay />);
    const element = getByTestId('ModalHeaderTitle');
    expect(element).toBeTruthy();
    expect(element.props.children).toBe('Events of monday');
  });

  it('Should header exist with correct title according to the events', () => {
    mockDaysData.monday.events = [];
    const { getByTestId } = render(<EventsOfDay />);
    const element = getByTestId('ModalHeaderTitle');
    expect(element).toBeTruthy();
    expect(element.props.children).toBe('Monday has no events');
  });

  it('Validate press', () => {
    const { getAllByTestId } = render(<EventsOfDay />);
    const listElements = getAllByTestId('EventCell');
    fireEvent.press(listElements[0]);
    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledWith('ImagesOfEvent');
    expect(mockActionOneFN).toBeCalled();
    expect(mockActionOneFN).toHaveBeenCalledWith(mockDaysData.monday.events[0]);
  });
});

describe('Render EventsOfDayLayout', () => {
  it('Should be EventsList exist', () => {
    const { getByTestId } = render(<EventsOfDayLayout {...layoutProps} />);
    const element = getByTestId('EventsList');
    expect(element).toBeTruthy();
  });

  it('Validate EventsList length', () => {
    const { getAllByTestId } = render(<EventsOfDayLayout {...layoutProps} />);
    const listElements = getAllByTestId('EventCell');
    expect(listElements).toHaveLength(4);
  });

  it('Validate press', () => {
    const { getAllByTestId } = render(<EventsOfDayLayout {...layoutProps} />);
    const listElements = getAllByTestId('EventCell');
    fireEvent.press(listElements[0]);
    expect(mockActionFN).toBeCalled();
    expect(mockActionFN).toHaveBeenCalledWith('1');
  });
});
