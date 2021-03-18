import styled, { css } from 'styled-components/native';

import { Wrapped } from '~/components/Base';

import { IButton } from '../data';

export default {
  Wrapped: styled(Wrapped)<IButton>`
    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
      `}
  `,
};
