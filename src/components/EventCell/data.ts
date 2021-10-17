export interface IEventCell {
  name: string;
  images: string[];
  hour: string;
  onPress(): void;
}

export interface IEventCellLayout extends IEventCell {
  imagesCount: number;
}

export interface ITitle {
  name: string;
  hour: string;
  imagesCount: number;
}

export interface IImage {
  image: string;
}

export interface IImages {
  images: string[];
}
