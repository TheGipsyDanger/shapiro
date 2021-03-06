import * as React from 'react';

import { Text, Wrapped } from '~/components/Base';

import { ISpotlightEventLayout } from '@/Spotlight';
import C from './styles';

export const Event = ({
  edit,
  event,
  remove,
  selectEvent,
}: ISpotlightEventLayout) => (
  <Wrapped
    flexDirection="row"
    borderBottomColor={'clean'}
    borderBottomWidth={1 / 3}
    minHeight={92}>
    <Wrapped
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      onPress={() => selectEvent(event.id)}>
      <Wrapped flex={1}>
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
    <C.Press onPress={() => edit(event.id)}>
      <C.Icon name="edit" />
    </C.Press>
    <C.Press onPress={() => remove(event.id)}>
      <C.Icon name="delete-forever" />
    </C.Press>
  </Wrapped>
);
