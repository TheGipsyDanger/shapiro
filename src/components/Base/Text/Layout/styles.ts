import styled, { css } from 'styled-components/native';
import { Text as TextBase } from 'react-native';
import { ITextLayout } from '../data';
import { color, space, border, typography, boxShadow } from 'styled-system';
import { colors, shadows } from '~/hooks/Theme';

const fontFamilies: { [key: string]: string } = {
  regular: 'rubik-regular',
  medium: 'rubik-medium',
  bold: 'rubik-bold',
  light: 'rubik-light',
};

export default {
  Text: styled(TextBase)<ITextLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${boxShadow};

    ${({ textTransform }) =>
      textTransform &&
      css`
        text-transform: ${textTransform};
      `}

    ${({ textDecoration }) =>
      textDecoration &&
      css`
        text-decoration: ${textDecoration};
      `}

    ${({ shadow }) =>
      shadow &&
      css`
        box-shadow: ${shadows[shadow as string]};
        elevation: 3;
      `}

    font-family: ${({ font }) => fontFamilies[font || 'regular']};
    color: ${({ color }) => colors[(color as string) || 'black']};
  `,
};
