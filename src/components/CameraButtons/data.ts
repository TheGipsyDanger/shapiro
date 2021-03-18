export interface ICameraButtons {
  type: number;
  flashMode: number;
  toggleType(): void;
  toggleFlash(): void;
  takePicture(): void;
}

export interface ICameraButtonsLayout extends ICameraButtons {}
