import {
  BorderProps,
  ColorProps,
  BoxShadowProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  FontStyleProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

type IFont = 'regular' | 'medium' | 'bold' | 'light' | 'black';
export interface IText
  extends BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    FontStyleProps,
    SpaceProps,
    BoxShadowProps,
    TypographyProps {
  shadow?: string;
  numberOfLines?: number;
  textTransform?: string;
  textDecoration?: string;
  font?: IFont;
  size?: number;
  testID?: string;
}

export interface ITextLayout extends IText {}
