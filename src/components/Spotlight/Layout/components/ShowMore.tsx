import * as React from 'react';

import { Text, Wrapped } from '~/components/Base';

import { ISpotlightShowMore } from '@/Spotlight';

export const ShowMore: React.FC<ISpotlightShowMore> = ({ openDay }) => (
  <Wrapped onPress={openDay} mt={4} center>
    <Text font="medium" size={4} numberOfLines={1}>
      More events
    </Text>
  </Wrapped>
);
