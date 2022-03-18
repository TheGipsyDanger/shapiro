import * as React from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { Wrapped, Icon } from '~/components/Base';

import { IImageOption } from '~/components/Gallery/data';

export const ImageOption = ({ onPress }: IImageOption) => {
  const topDistance =
    initialWindowMetrics?.insets?.top !== undefined
      ? initialWindowMetrics?.insets?.top
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
          <Wrapped
            boxShadow="card"
            width={42}
            height={42}
            mr={2}
            borderRadius="circle">
            <Wrapped {...{ onPress }} flex={1} center>
              <Icon name={'delete'} color="white" size={32} />
            </Wrapped>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
