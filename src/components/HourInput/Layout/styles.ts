import styled from 'styled-components/native';
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
};
