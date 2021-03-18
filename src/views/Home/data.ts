import { IMapDays } from '~/utils';

export interface IHomeList {
  selectDay(day: string): void;
  days: IMapDays[];
}
export interface IHomeListItem {
  item: IMapDays;
  index: number;
}

export interface IHome {}
export interface IHomeLayout extends IHome {
  selectDay(day: string): void;
  goToCreateEvent(): void;
  goToCamera(): void;
  days: IMapDays[];
}
