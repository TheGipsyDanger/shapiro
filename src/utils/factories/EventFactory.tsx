import moment from 'moment';
import {
  IDay,
  IResp,
  IEvent,
  IDayNames,
  IFormattedEvent,
  IFormattedImages,
  ICreateEventForm,
  ICreatedEventStatus,
} from '~/utils';

import orderBy from 'lodash/orderBy';

import uuid from 'react-native-uuid';
interface IEventFactory {
  formattingTheEvent(): IFormattedEvent;
  formattingImages(images: string[]): IFormattedImages;
  getCurrentEvent(id: string): IEvent;
  checkEventIsValid(values: ICreateEventForm): ICreatedEventStatus;
  createEvent(values: ICreateEventForm): IDay;
  sortEvents(events: IEvent[]): IEvent[];
  getEventNow(day: IDayNames): IResp;
  updateEvent(event: IEvent): void;
}

export const createEventFactory = (day: IDay): IEventFactory => {
  const currentDay = { ...day };

  const formattingTheEvent = (): IFormattedEvent => {
    return {
      day: Object.keys(currentDay)[0] as IDayNames,
      events: Object.values(currentDay)[0].events,
    };
  };

  const getCurrentEvent = (id: string): IEvent => {
    return Object.values(currentDay)[0].events.filter(
      event => event.id === id
    )[0];
  };

  const formattingImages = (images: string[]): IFormattedImages => {
    const imagesToShow = images.slice(0, 3);

    const imagesArrayIsOk =
      imagesToShow.length === 3 || imagesToShow.length === 0;

    if (!imagesArrayIsOk) {
      const countToFor = 3 - imagesToShow.length;
      for (let index = 0; index < countToFor; index++) {
        imagesToShow.push('fakeImage');
      }
    }

    return {
      images: imagesToShow,
      imagesCount: imagesToShow.filter((img: string) => img !== 'fakeImage')
        .length,
    };
  };

  const formatTime = (hour: string): number => Number(hour.replace(':', ''));

  const checkEventIsValid = (values: ICreateEventForm): ICreatedEventStatus => {
    const start = formatTime(values.start);
    const final = formatTime(values.final);

    const events = currentDay[values.day].events;

    const errors = events.reduce((acc: string[], curr) => {
      const eventInitial = formatTime(curr.initial);
      const eventFinal = formatTime(curr.final);
      if (
        (start >= eventInitial && start <= eventFinal) ||
        (final >= eventInitial && final <= eventFinal)
      ) {
        return [...acc, 'There are events at those times.'];
      }
      if (start <= eventInitial && final >= eventFinal) {
        return [...acc, 'There are events at those times.'];
      }
      return acc;
    }, []);

    return {
      success: errors.length === 0,
      errors,
    };
  };

  const createEvent = (values: ICreateEventForm): IDay => {
    const events = currentDay[values.day].events;

    const newEvent: IEvent = {
      id: String(uuid.v1()),
      name: values.name,
      initial: values.start,
      final: values.final,
      images: [],
    };

    currentDay[values.day].events = [...events, newEvent];

    return currentDay;
  };

  const sortEvents = (events: IEvent[]): IEvent[] => {
    return orderBy(events, ['initial'], ['asc']);
  };

  const getEventNow = (day: IDayNames): IResp => {
    const events = currentDay[day].events;

    const hasEvent = events.filter(event => {
      const now = Number(moment().format('HHmm'));
      const start = Number(event.initial.replace(':', ''));
      const final = Number(event.final.replace(':', ''));
      return now >= start && now <= final;
    });

    return {
      success: hasEvent.length > 0,
      data:
        hasEvent.length > 0
          ? hasEvent[0]
          : { error: 'nenhum evento encontrado' },
    };
  };

  const updateEvent = (event: IEvent) => {};

  return {
    sortEvents,
    createEvent,
    getEventNow,
    updateEvent,
    getCurrentEvent,
    formattingImages,
    checkEventIsValid,
    formattingTheEvent,
  };
};
