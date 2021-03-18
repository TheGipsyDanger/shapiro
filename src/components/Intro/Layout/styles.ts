import styled from 'styled-components/native';
import { Metrics } from '~/styles';

export default {
  Image: styled.Image.attrs({
    resizeMode: 'contain',
  })`
    width: ${Metrics.normalize(280)}px;
    height: ${Metrics.normalize(320)}px;
  `,
};
