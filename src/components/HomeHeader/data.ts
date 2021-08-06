import { IDate } from '~/utils/interfaces';

export interface IHomeHeader {}

export interface IHomeHeaderLayout extends IHomeHeader {
  date: IDate;
}
