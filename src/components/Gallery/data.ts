export interface IImage {
  uri: string;
}

export interface IImageLayout {
  uri: string;
  changeInfoState(): void;
}
export interface IThumb
  extends Pick<IGalleryLayout, 'changeThumbIndex' | 'isSelect'> {
  uri: string;
  index: number;
}
export interface IGallery {
  goBack(): void;
}

export interface IImageOption {
  onPress(): void;
}
export interface IGalleryLayout extends IGallery {
  thumbRef: any;
  galleryRef: any;
  images: IImage[];
  activeIndex: number;
  showInfo: boolean;
  deleteImage(): void;
  isSelect(index: number): boolean;
  changeThumbIndex(index: number): void;
  changeGalleryIndex(event: any): void;
  changeInfoState(): void;
}
