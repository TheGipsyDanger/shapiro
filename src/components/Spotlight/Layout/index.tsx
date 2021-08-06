import * as React from 'react';

import { Card, Text, Wrapped, Icon } from '~/components/Base';

import { ISpotlightLayout } from '../data';

export const Spotlight: React.FC<ISpotlightLayout> = ({
  events,
  onPress,
  selectEvent,
}) => (
  <Wrapped testID={`Spotlight`} mt={4}>
    <Wrapped flexDirection="row" justifyContent="space-between" mb={3}>
      <Wrapped center>
        <Text size={7} font="medium">
          Today
        </Text>
      </Wrapped>

      <Wrapped {...{ onPress }}>
        <Icon name={'plussquare'} color="green" size={40} />
      </Wrapped>
    </Wrapped>

    {!events.length && <Text mb={3}>No recorded events</Text>}

    {events.map((event, index) => (
      <Wrapped
        key={index}
        py={3}
        mb={events.length - 1 !== index ? 3 : 0}
        onPress={() => selectEvent(event.id)}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottomColor={'black'}
        borderBottomWidth={1 / 3}>
        <Wrapped>
          <Text font="medium" numberOfLines={1}>
            {event.name}
          </Text>
          <Text size={2}>{`${event.images.length} photos`}</Text>
        </Wrapped>
        <Wrapped>
          <Text numberOfLines={1} size={3}>
            {`${event.initial} - ${event.final}`}
          </Text>
        </Wrapped>
      </Wrapped>
    ))}
  </Wrapped>
);
