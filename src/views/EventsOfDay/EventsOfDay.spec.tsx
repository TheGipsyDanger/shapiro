import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { mockDaysData } from '~/utils';

import { EventsOfDay } from './';
import { EventsOfDay as EventsOfDayLayout } from './Layout';

const mockFN = jest.fn();
const mockActionFN = jest.fn();

jest.mock('../../hooks/Event', () => {
  return {
    useEvent: () => ({
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
  day: 'monday',
  events: mockDaysData.monday.events,
  selectEvent: mockActionFN,
};

describe('Render EventsOfDay', () => {
  it('Should be EventsOfDay exist', () => {
    const { getByTestId } = render(<EventsOfDay />);
    const currentElement = getByTestId(`EventsOfDay`);
    expect(currentElement).toBeTruthy();
  });

  it('Validate press', () => {
    const { getAllByTestId } = render(<EventsOfDay />);
    const listElements = getAllByTestId('EventCell');
    fireEvent.press(listElements[0]);
    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledWith('ImagesOfEvent');
  });
});

describe('Render EventsOfDayLayout', () => {
  it('Should be EventsList exist', () => {
    const { getByTestId } = render(<EventsOfDayLayout {...layoutProps} />);
    const currentElement = getByTestId('EventsList');
    expect(currentElement).toBeTruthy();
  });

  it('Validate EventsList length', () => {
    const { getAllByTestId } = render(<EventsOfDayLayout {...layoutProps} />);
    const listElements = getAllByTestId('EventCell');
    expect(listElements).toHaveLength(3);
  });

  it('Validate press', () => {
    const { getAllByTestId } = render(<EventsOfDayLayout {...layoutProps} />);
    const listElements = getAllByTestId('EventCell');
    fireEvent.press(listElements[0]);
    expect(mockActionFN).toBeCalled();
    expect(mockActionFN).toHaveBeenCalledWith('Lily James 1');
  });

  it('Validate EventsList length with not events', () => {
    const { queryByTestId } = render(
      <EventsOfDayLayout {...layoutProps} events={[]} />
    );
    const currentElement = queryByTestId('EventsList');
    expect(currentElement).not.toBeTruthy();
  });

  it('Validate EmptyMessage exist', () => {
    const { queryByTestId } = render(
      <EventsOfDayLayout {...layoutProps} events={[]} />
    );
    const currentElement = queryByTestId('EmptyMessage');
    expect(currentElement).toBeTruthy();
  });

  it('Validate EmptyMessageText exist', () => {
    const { queryByTestId } = render(
      <EventsOfDayLayout {...layoutProps} events={[]} />
    );
    const emptyText = queryByTestId('EmptyMessageText');
    expect(emptyText.props.children).toEqual('No Events');
  });
});
