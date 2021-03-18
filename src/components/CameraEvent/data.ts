import { IEvent } from '~/utils';

export interface ICameraEvent {
  event: IEvent;
}

export interface ICameraEventLayout extends ICameraEvent {
  goToCreateEvent(): void;
}
