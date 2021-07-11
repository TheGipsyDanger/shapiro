export interface IActionButton {
  onPress: any;
  icon: IIconName;
}

type IIconName = 'camera' | 'delete';

export interface IActionButtonLayout extends IActionButton {}
