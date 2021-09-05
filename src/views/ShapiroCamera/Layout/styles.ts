import styled from 'styled-components/native';

import { Text } from '~/components';

export default {
  Text: styled(Text).attrs(props => ({
    color: 'white',
    mb: props.mb ? props.mb : 2,
  }))`
    text-align: center;
  `,
};
