import styled from 'styled-components/native';
import { Metrics } from '~/styles';
import { space } from '~/hooks/Theme';

import { Wrapped } from '~/components';

export default {
  ImageContainer: styled(Wrapped)`
    width: ${Metrics.width / 4}px;
    height: ${Metrics.width / 4}px;
  `,
  Image: styled.Image.attrs({
    resizeMode: 'cover',
  })`
    width: ${Metrics.width / 4 - space[1] / 2}px;
    height: ${Metrics.width / 4 - space[1] / 2}px;
  `,
};
