import styled, { css } from 'styled-components/native';
import { ICardLayout } from '../data';
import { theme } from '~/hooks/Theme';

import {
  border,
  boxShadow,
  color,
  flexbox,
  space,
  typography,
  backgroundColor,
  borderColor,
} from 'styled-system';

export default {
  Wrapped: styled.View<ICardLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${backgroundColor};
    ${borderColor};

    ${({ shadow }) =>
      shadow &&
      css`
        box-shadow: ${theme.shadows[shadow as string]};
        elevation: 3;
      `}

    ${({ center }) =>
      center &&
      css`
        align-items: center;
        justify-content: center;
      `}

    ${({ borderColor }) =>
      borderColor &&
      css`
        border-color: ${theme.colors[borderColor as string]};
      `}
  `,
};
