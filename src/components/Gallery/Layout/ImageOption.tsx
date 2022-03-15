import * as React from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { Wrapped, Icon } from '~/components/Base';

import { IImageOption } from '~/components/Gallery/data';

export const ImageOption = ({ onPress }: IImageOption) => {
  const topDistance =
    initialWindowMetrics?.insets?.top !== undefined
      ? initialWindowMetrics?.insets?.top + 44
      : 0;
  return (
    <Wrapped
      position="absolute"
      zIndex={2}
      top={topDistance}
      left={0}
      right={0}>
      <Wrapped flex={1} flexDirection="row" justifyContent="flex-end">
        <Wrapped width="50%" flexDirection="row" justifyContent="flex-end">
          <Wrapped width={42} height={42} bg="red" borderRadius="circle">
            <Wrapped {...{ onPress }} flex={1} center>
              <Icon name={'delete'} color="white" size={18} />
            </Wrapped>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
