import * as React from 'react';

import { Slider } from './Slider';
import { Indicator } from './Indicator';
import { Wrapped } from '~/components/Base/Wrapped';

import { IPromotionalSliderLayout } from '../data';

export const PromotionalSlider: React.FC<IPromotionalSliderLayout> = ({
  height = 255,
  ...props
}) => (
  <Wrapped testID={'PromotionalSlider'} mt={8} height={height}>
    <Slider {...props} />
    <Indicator {...props} />
  </Wrapped>
);
