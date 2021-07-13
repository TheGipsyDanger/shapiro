import styled from 'styled-components/native';
import ICON from '@expo/vector-icons/build/MaterialCommunityIcons';
import BaseModal from 'react-native-modal';
import {
  space,
  color,
  typography,
  border,
  flexbox,
  boxShadow,
  backgroundColor,
} from 'styled-system';

import { Wrapped } from '~/components/Base/Wrapped';
import { IModalLayout } from '../data';

export default {
  //@ts-ignore
  ModalWrapped: styled(BaseModal)<IModalLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${backgroundColor};
    margin: 0;
    padding: 0;
  `,
  ModalContent: styled(Wrapped)`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `,
  CloseIcon: styled(ICON).attrs({
    size: 24,
    color: 'white',
    name: 'close',
  })``,
};
