import * as React from 'react';

import { Text, Wrapped, Icon } from '~/components/Base';

import { ISpotlightLayout } from '../data';

export const Spotlight: React.FC<ISpotlightLayout> = ({
  events,
  onPress,
  selectEvent,
}) => (
  <Wrapped testID={`Spotlight`} mt={4}>
    <Wrapped flexDirection={'row'} justifyContent="space-between" mb={2}>
      <Wrapped center>
        <Text size={7} font="black" color="clean">
          {`EVENTS`}
        </Text>
      </Wrapped>
      <Wrapped testID={`AddEvent`} {...{ onPress }}>
        <Icon name={'plus'} color="clean" size={40} />
      </Wrapped>
    </Wrapped>

    <Wrapped flex={1}>
      {events.map((event, index) => (
        <Wrapped
          key={index}
          py={2}
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

    {!events.length && (
      <Text mb={3} font="black">
        No recorded events
      </Text>
    )}
  </Wrapped>
);
