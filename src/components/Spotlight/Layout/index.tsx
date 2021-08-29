import * as React from 'react';

import { Text, Wrapped, Icon } from '~/components/Base';

import { ISpotlightLayout } from '../data';

export const Spotlight: React.FC<ISpotlightLayout> = ({
  day,
  events,
  onPress,
  openDay,
  showMore,
  hasEvents,
  selectEvent,
}) => (
  <Wrapped testID={`Spotlight`} mt={4}>
    <Wrapped flexDirection={'row'} justifyContent="space-between" mb={2}>
      <Wrapped>
        <Text size={7} font="black" color="clean">
          {`${day.toUpperCase()}\nEVENTS`}
        </Text>
      </Wrapped>
      <Wrapped center testID={`AddEvent`} {...{ onPress }}>
        <Wrapped bg={'clean'} p={2} borderRadius="circle">
          <Icon name={'plus'} color="black" size={30} />
        </Wrapped>
      </Wrapped>
    </Wrapped>

    {hasEvents ? (
      <Wrapped flex={1}>
        {events.map((event, index) => (
          <Wrapped
            key={index}
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
        ))}

        {showMore && (
          <Wrapped onPress={openDay} mt={4} center>
            <Text font="medium" numberOfLines={1}>
              Show More
            </Text>
          </Wrapped>
        )}
      </Wrapped>
    ) : (
      <Text font="black" size={4} mb={3}>
        No recorded events
      </Text>
    )}
  </Wrapped>
);
