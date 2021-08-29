import { IEvent } from '~/utils';

export interface ISpotlight {
  onPress(): void;
}

export interface ISpotlightLayout extends ISpotlight {
  day: string;
  showMore: boolean;
  hasEvents: boolean;
  events: IEvent[];
  selectEvent(name: string): void;
  openDay(): void;
}
