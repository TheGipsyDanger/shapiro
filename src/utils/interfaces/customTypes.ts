export type withChildren<T = {}> = T & { children?: React.ReactNode };
export type IModalType = { [key: string]: JSX.Element };
export type IInsets = { top: number; bottom: number };
export type IElementMap = { [key: string]: JSX.Element };
export type INumberMap = { [key: number]: number };
export type IImagesModal = { url: string };

export interface ISliderImage {
  id: string;
  uri: string;
}
