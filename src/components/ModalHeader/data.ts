export interface IModalHeader {
  data?: any;
  title: string;
  showIcon?: boolean;
  color?: 'black' | 'white';
}

export interface IModalHeaderLayout extends IModalHeader {
  onPress(): void;
}
