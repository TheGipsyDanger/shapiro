import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { Wrapped } from '~/components/Base';
import { Metrics } from '~/styles';

const { width, height } = Metrics;

export default {
  Container: styled.View({
    width,
    height,
  }),
  Image: styled.Image({
    ...StyleSheet.absoluteFillObject,
  }),
  Thumb: styled(Wrapped).attrs({
    borderWidth: 2,
    mr: 1,
  })``,
  ThumbImage: styled.Image({
    width: width / 6,
    height: width / 6,
  }),
};
