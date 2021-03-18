import { IDate } from '~/utils/interfaces';

export interface IHomeHeader {
  onPress(): void;
}

export interface IHomeHeaderLayout extends IHomeHeader {
  date: IDate;
}
