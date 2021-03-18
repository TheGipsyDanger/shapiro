import { IEvent } from '~/utils';

export interface ISpotlight {
  data?: any;
}

export interface ISpotlightLayout extends ISpotlight {
  day: string;
  events: IEvent[];
  selectEvent(name: string): void;
}
