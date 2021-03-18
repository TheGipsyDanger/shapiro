import styled from 'styled-components/native';
import { Metrics } from '~/styles';

export default {
  Image: styled.Image`
    width: ${Metrics.width / 3 - Metrics.defaultSpace(3)}px;
    height: ${Metrics.width / 3 - Metrics.defaultSpace(3)}px;
  `,
};
