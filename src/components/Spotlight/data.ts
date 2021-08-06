import { IEvent } from '~/utils';

export interface ISpotlight {
  onPress(): void;
}

export interface ISpotlightLayout extends ISpotlight {
  day: string;
  events: IEvent[];
  selectEvent(name: string): void;
}
