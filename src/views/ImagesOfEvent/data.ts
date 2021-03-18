import { IEvent } from '~/utils';

export interface IImagesOfEvent {
  data?: any;
}

export interface IImagesOfEventLayout extends IImagesOfEvent {
  currentEvent: IEvent;
  goTo(imageIndex: number): void;
}
