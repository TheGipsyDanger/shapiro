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
export interface ISpotlightHeaderLayout
  extends Pick<ISpotlightLayout, 'day' | 'onPress'> {}
export interface ISpotlightEventLayout
  extends Pick<ISpotlightLayout, 'selectEvent'> {
  event: IEvent;
}
export interface ISpotlightShowMore {
  openDay(): void;
}
