import { IEvent } from '~/utils';

export interface IEventsOfDay {
  data?: any;
}

export interface IEventListItem {
  item: IEvent;
  index: number;
}

export interface IEventsOfDayLayout extends IEventsOfDay {
  headerTitle: string;
  events: IEvent[];
  selectEvent(name: string): void;
}
