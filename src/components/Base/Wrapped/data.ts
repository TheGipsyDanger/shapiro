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
  PositionProps,
  ColorStyleProps,
} from 'styled-system';

export interface IWrapped
  extends PositionProps,
    BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    BorderColorProps,
    ColorStyleProps,
    LayoutProps {
  shadow?: string;
  testID?: string;
  center?: boolean;
  onPress?(): void;
}

export interface IWrappedLayout extends IWrapped {}
