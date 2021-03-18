import styled from 'styled-components/native';
import { space } from '~/hooks/Theme';
import { Metrics } from '~/styles';

export default {
  Image: styled.Image.attrs({
    resizeMode: 'cover',
  })`
    width: ${Metrics.width / 3 - space[3]}px;
    height: ${Metrics.width / 3 - space[3]}px;
  `,
  FakeImage: styled.View`
    align-items: center;
    justify-content: center;
    height: ${Metrics.width / 3 - space[3]}px;
  `,
};
