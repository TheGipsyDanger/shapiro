export interface IWelcome {}

export interface IWelcomeLayout extends IWelcome {
  data: ISlide[];
  onTutorialDone(): void;
}

export interface IItem {
  item: ISlide;
}

export interface ISlide {
  key: string;
  title: string;
  text: string;
  image: HTMLImageElement;
}

export interface IButtonSlide {
  id: string;
  label: string;
  onPress(): void;
}
