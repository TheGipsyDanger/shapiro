import { IEvent } from '~/utils';
export interface ISpotlight {
  onPress(): void;
}
export interface ISpotlightLayout extends ISpotlight {
  day: string;
  events: IEvent[];
  showMore: boolean;
  hasEvents: boolean;
  openDay(): void;
  edit(id: string): void;
  remove(id: string): void;
  selectEvent(name: string): void;
}
export interface ISpotlightHeaderLayout
  extends Pick<ISpotlightLayout, 'day' | 'onPress'> {}
export interface ISpotlightEventLayout
  extends Pick<ISpotlightLayout, 'selectEvent' | 'edit' | 'remove'> {
  event: IEvent;
}
export interface ISpotlightShowMore extends Pick<ISpotlightLayout, 'openDay'> {}
