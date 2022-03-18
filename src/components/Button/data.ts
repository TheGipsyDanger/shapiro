import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
  BorderColorProps,
} from 'styled-system';

export interface IButton
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    BorderColorProps,
    LayoutProps {
  title: string;
  disabled?: boolean;
  shadow?: string;
  testID?: string;
  center?: boolean;
  type?: 'clean' | 'default';
  onPress?(): void;
}

export interface IButtonLayout extends IButton {}
