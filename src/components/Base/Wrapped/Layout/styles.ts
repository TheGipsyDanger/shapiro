import styled, { css } from 'styled-components/native';
import { IWrappedLayout } from '../data';
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
  Wrapped: styled.View<IWrappedLayout>`
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

    ${({ backgroundColor, bg }) =>
      (backgroundColor || bg) &&
      css`
        background-color: ${theme.colors[
          (backgroundColor as string) || (bg as string)
        ]};
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


    ${({ borderRadius }) =>
      borderRadius &&
      css`
        border-radius: ${theme.radii[borderRadius as string]}px;
      `}
  `,
};
