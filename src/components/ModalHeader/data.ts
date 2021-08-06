export interface IModalHeader {
  data?: any;
  title: string;
  color?: 'black' | 'white';
}

export interface IModalHeaderLayout extends IModalHeader {
  onPress(): void;
}
