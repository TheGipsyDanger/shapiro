import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export default {
  Input: styled.TextInput`
    font-family: 'rubik-light';
    font-size: 22px;
  `,
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
  Container: styled.View`
    flex: 1;
    background: #fff;
    align-items: center;
    justify-content: center;
  `,
  Text: styled.Text`
    font-size: 18px;
    color: #f37321;
    font-weight: bold;
  `,
};
