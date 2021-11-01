export interface IImage {
  uri: string;
  changeInfoState(): void;
}

export interface IThumb
  extends Pick<IGalleryLayout, 'changeThumbIndex' | 'isSelect'> {
  uri: string;
  index: number;
}
export interface IGallery {}

export interface IGalleryLayout extends IGallery {
  thumbRef: any;
  galleryRef: any;
  images: IImage[];
  activeIndex: number;
  showInfo: boolean;
  isSelect(index: number): boolean;
  changeThumbIndex(index: number): void;
  changeGalleryIndex(event: any): void;
  changeInfoState(): void;
}
