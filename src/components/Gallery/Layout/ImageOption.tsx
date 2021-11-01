import * as React from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { Wrapped, Icon } from '~/components/Base';

export const ImageOption = () => (
  <Wrapped
    position="absolute"
    zIndex={2}
    top={initialWindowMetrics?.insets.top}
    left={0}
    right={0}>
    <Wrapped flex={1} flexDirection="row" justifyContent="flex-end">
      <Wrapped width="50%" flexDirection="row" justifyContent="flex-end">
        <Wrapped width={56} height={56} bg="red" borderRadius="circle">
          <Wrapped flex={1} center>
            <Icon name={'edit'} color="white" size={26} />
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
