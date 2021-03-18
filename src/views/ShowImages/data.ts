import { IImagesModal } from '~/utils';

export interface IShowImages {}

export interface IShowImagesLayout extends IShowImages {
  images: string[];
  imagesForModal: IImagesModal[];
  imageIndex: number;
  swipeCarrousel(imageIndex: any): void;
  changeBottomCarrouselIndex(imageIndex: any): void;
}
