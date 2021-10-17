import { withChildren } from '~/utils';
export interface IHeader {
  title?: string;
}

export interface IHeaderLayout extends IHeader, withChildren {}
