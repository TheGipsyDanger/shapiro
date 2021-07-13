import { IEvent } from '~/utils';

export interface IImagesOfEvent {
  data?: any;
}

export interface IImagesOfEventLayout extends IImagesOfEvent {
  currentEvent: IEvent;
  showAlert(): void;
  goTo(imageIndex: number): void;
}
