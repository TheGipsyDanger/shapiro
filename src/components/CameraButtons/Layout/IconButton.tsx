import * as React from 'react';

import { Wrapped, Icon } from '~/components/Base';

import { IIconButton } from '@/CameraButtons';

export const IconButton = ({ icon, lib, onPress }: IIconButton) => (
  <Wrapped height={40} width={40} center>
    <Wrapped {...{ onPress }}>
      <Icon lib={lib} name={icon} color="white" size={30} />
    </Wrapped>
  </Wrapped>
);
