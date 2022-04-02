import { IMapDays } from '~/utils';

export interface IHomeList extends Pick<IHomeLayout, 'dayName'> {
  selectDay(day: string): void;
  days: IMapDays[];
}
export interface IHomeListItem {
  item: IMapDays;
  index: number;
}

export interface IHome {}
export interface IHomeLayout extends IHome {
  dayName: string;
  selectDay(day: string): void;
  goToCreateEvent(): void;
  goToCamera(): void;
  days: IMapDays[];
}
