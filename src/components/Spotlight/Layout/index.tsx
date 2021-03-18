import * as React from 'react';

import { Card, Text, Wrapped } from '~/components/Base';

import { ISpotlightLayout } from '../data';

export const Spotlight: React.FC<ISpotlightLayout> = ({
  events,
  selectEvent,
}) => (
  <Card bg="transparent" testID={`Spotlight`} mt={4}>
    <Text color="white" size={7} mb={3} font="bold">
      Today
    </Text>

    {!events.length && (
      <Text color="white" mb={3}>
        No recorded events
      </Text>
    )}

    {events.map((event, index) => (
      <Card
        onPress={() => selectEvent(event.id)}
        key={index}
        py={3}
        px={3}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb={events.length - 1 !== index ? 3 : 0}>
        <Wrapped>
          <Text color="primary" font="medium" numberOfLines={1}>
            {event.name}
          </Text>
          <Text
            color="primary"
            size={2}>{`${event.images.length} photos`}</Text>
        </Wrapped>
        <Wrapped>
          <Text color="primary" numberOfLines={1} size={3}>
            {`${event.initial} - ${event.final}`}
          </Text>
        </Wrapped>
      </Card>
    ))}
  </Card>
);
