import * as React from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { Wrapped } from '~/components/Base';
import { ModalHeader } from '~/components/ModalHeader';

export const Header = () => (
  <Wrapped
    zIndex={2}
    position="absolute"
    top={initialWindowMetrics?.insets.top}
    left={0}
    right={0}>
    <ModalHeader title="  " color="white" />
  </Wrapped>
);
