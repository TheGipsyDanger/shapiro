import * as React from 'react';

import { Wrapped } from '~/components/Base/Wrapped';

import { IIndicator } from '../data';

export const Indicator = ({
  isSelect,
  indicatorPress,
  indicatorImages,
}: IIndicator) => (
  <Wrapped
    testID={`PromotionalSlider:Indicator`}
    position="absolute"
    bottom={22}
    right={0}
    left={0}
    flexDirection="row"
    center>
    {indicatorImages.map((_, index) => (
      <Wrapped
        key={index}
        testID={'PromotionalSlider:Indicator.Item'}
        onPress={() => indicatorPress(index)}>
        <Wrapped
          mx={2}
          height={10}
          width={24}
          borderRadius={'slider'}
          bg={isSelect(index) ? 'indicatorActive' : 'indicatorNoActive'}
        />
      </Wrapped>
    ))}
  </Wrapped>
);
