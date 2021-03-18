import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { createEventFactory, mockDaysData } from '~/utils';

import { EventCell } from './';
import { EventCell as EventCellLayout } from './Layout';

const mockFN = jest.fn();

const Event = createEventFactory({
  monday: {
    events: mockDaysData.monday.events,
  },
});

const { images, imagesCount } = Event.formattingImages(
  mockDaysData.monday.events[1].images
);

const eventProps = {
  name: 'math',
  images,
};

const eventlayoutProps = {
  ...eventProps,
  imagesCount,
  selectEvent: mockFN,
};

describe('Render EventCell', () => {
  it('Should be EventCell exist', () => {
    const { getByTestId } = render(<EventCell {...eventProps} />);
    const currentElement = getByTestId('EventCell');
    expect(currentElement).toBeTruthy();
  });

  it('Validate images correct', () => {
    const { getAllByTestId } = render(
      <EventCellLayout {...eventlayoutProps} />
    );
    const listElements = getAllByTestId('EventCellImage');
    expect(listElements).toHaveLength(eventlayoutProps.imagesCount);
  });

  it('Validate images show correct fakeImage', () => {
    const { getAllByTestId } = render(
      <EventCellLayout {...eventlayoutProps} />
    );
    const listElements = getAllByTestId('EventCellImageFake');
    expect(listElements).toHaveLength(
      eventlayoutProps.images.length - eventlayoutProps.imagesCount
    );
  });

  it('Validate text', () => {
    const { queryByTestId } = render(<EventCellLayout {...eventlayoutProps} />);
    const nameText = queryByTestId('EventCellName');
    const countText = queryByTestId('EventCellCount');
    expect(nameText.props.children).toEqual('math');
    expect(countText.props.children).toEqual(eventlayoutProps.imagesCount);
  });

  it('Validate press', () => {
    const { queryByTestId } = render(<EventCellLayout {...eventlayoutProps} />);
    const currentElement = queryByTestId('EventCell');
    fireEvent.press(currentElement);
    expect(mockFN).toBeCalled();
    expect(mockFN).toHaveBeenCalledWith(eventlayoutProps.name);
  });

  it('Validate empty message', () => {
    const { queryByTestId } = render(
      <EventCellLayout {...eventlayoutProps} images={[]} imagesCount={0} />
    );
    const currentElement = queryByTestId('EventCellEmptyMessage');
    expect(currentElement).toBeTruthy();
  });
});
