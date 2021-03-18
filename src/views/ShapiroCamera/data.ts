import { IEvent } from '~/utils';

export interface IShapiroCamera {}

export interface IShapiroCameraLayout extends IShapiroCamera {
  type: number;
  cameraRef: any;
  flashMode: number;
  hasPermission: boolean | null;
  event: IEvent;
  hasEvent: boolean;
  takePicture(): void;
  toggleType(): void;
  toggleFlash(): void;
}
