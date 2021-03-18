export interface IModalHeader {
  data?: any;
  title: string;
}

export interface IModalHeaderLayout extends IModalHeader {
  onPress(): void;
}
