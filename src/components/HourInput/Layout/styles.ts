import styled from 'styled-components/native';
import { Text } from '~/components/Base';
import { TextInputMask } from 'react-native-masked-text';

export default {
  TimeInput: styled(TextInputMask).attrs({
    type: 'custom',
    options: {
      mask: '99:99',
    },
    autoCorrect: false,
    autoCapitalize: 'none',
    keyboardType: 'number-pad',
  })`
    font-family: 'rubik-light';
    font-size: 22px;
  `,
  FakeTimeInput: styled(Text).attrs({
    font: 'light',
    size: 6,
  })``,
};
