export interface IImage {
  uri: string;
}

export interface IThumb
  extends IImage,
    Pick<IGalleryLayout, 'changeThumbIndex' | 'isSelect'> {
  index: number;
}

export interface IGallery {}

export interface IGalleryLayout extends IGallery {
  thumbRef: any;
  galleryRef: any;
  images: IImage[];
  activeIndex: number;
  isSelect(index: number): boolean;
  changeThumbIndex(index: number): void;
  changeGalleryIndex(event: any): void;
}
