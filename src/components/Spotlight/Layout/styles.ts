import styled from 'styled-components/native';

import { Wrapped, Icon } from '~/components/Base';

export default {
  Icon: styled(Icon).attrs({
    color: 'black',
    size: 24,
    lib: 'MaterialIcons',
  })``,
  Press: styled(Wrapped).attrs({
    center: true,
    pl: 2,
  })``,
};
