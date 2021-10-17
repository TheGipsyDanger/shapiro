import * as React from 'react';

import { IThumb } from '../data';
import C from './styles';

export const Thumb = ({ changeThumbIndex, isSelect, index, uri }: IThumb) => (
  <C.Thumb
    onPress={() => changeThumbIndex(index)}
    borderColor={isSelect(index) ? 'white' : 'transparent'}>
    <C.ThumbImage
      source={{
        uri,
      }}
    />
  </C.Thumb>
);
