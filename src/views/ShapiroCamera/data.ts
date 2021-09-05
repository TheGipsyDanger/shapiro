import { IEvent } from '~/utils';

export interface IShapiroCamera {}

export interface IShapiroCameraLayout extends IShapiroCamera {
  type: number;
  cameraRef: any;
  flashMode: number;
  hasPermission: boolean | null;
  event: IEvent;
  missingPermissions: IPermissionCheck;
  hasEvent: boolean;
  takePicture(): void;
  toggleType(): void;
  toggleFlash(): void;
  openDeviceSettings(): void;
}

export interface IPermissionCheck {
  camera: boolean;
  roll: boolean;
}

export interface IPermission {
  camera: string;
  roll: string;
}
