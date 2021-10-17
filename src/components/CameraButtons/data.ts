export interface ICameraButtons {
  type: number;
  flashMode: number;
  toggleType(): void;
  toggleFlash(): void;
  takePicture(): void;
}

export interface ICameraButtonsLayout extends ICameraButtons {}

export interface IIconButton {
  icon: string;
  lib: string;
  onPress(): void;
}
export interface IButton {
  onPress(): void;
}
