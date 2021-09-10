import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';

import { IDayCellLayout } from '@/DayCell';

export const DayCell: React.FC<IDayCellLayout> = ({
  day,
  size,
  press,
  events,
  defineText,
}) => (
  <Wrapped testID="DayCell" my={2} onPress={() => press(day)}>
    <Wrapped
      width={size}
      height={size}
      borderRadius="circle"
      borderColor={day}
      borderWidth={1}>
      <Wrapped flex={1} borderRadius={'circle'} center>
        <Text
          testID="DayCellTitle"
          size={4}
          color={day}
          font="black"
          textTransform="uppercase">
          {defineText(day)}
        </Text>
        <Text testID="DayCellSubtitle" size={3} color="gray">
          {`${events} events`}
        </Text>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
