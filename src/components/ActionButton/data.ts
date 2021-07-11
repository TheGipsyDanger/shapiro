export interface IActionButton {
  onPress: any;
  icon: IIconName;
  type?: string;
}

type IIconName = 'camera' | 'delete';

export interface IActionButtonLayout extends IActionButton {}
