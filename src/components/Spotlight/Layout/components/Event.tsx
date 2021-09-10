import * as React from 'react';

import { Text, Wrapped } from '~/components/Base';

import { ISpotlightEventLayout } from '@/Spotlight';

export const Event: React.FC<ISpotlightEventLayout> = ({
  event,
  selectEvent,
}) => (
  <Wrapped
    onPress={() => selectEvent(event.id)}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    borderBottomColor={'black'}
    borderBottomWidth={1 / 3}
    py={3}>
    <Wrapped>
      <Text font="medium" numberOfLines={1}>
        {event.name}
      </Text>
      <Text size={2}>{`${event.images.length} photos`}</Text>
    </Wrapped>
    <Wrapped bg="clean" p={1} px={2} borderRadius="medium">
      <Text numberOfLines={1} size={3}>
        {`${event.initial} - ${event.final}`}
      </Text>
    </Wrapped>
  </Wrapped>
);
