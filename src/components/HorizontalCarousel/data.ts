export interface IHorizontalCarousel {
  imageIndex: number;
  images: string[];
  changeBottomCarrouselIndex(imageIndex: any): void;
}

export interface IHorizontalCarouselLayout extends IHorizontalCarousel {
  flatlistRef: any;
  changeIndex(imageIndex: any): void;
}
