import * as React from 'react';

import { Wrapped, Text, Card } from '~/components/Base';

import { Metrics } from '~/styles';

const { width } = Metrics;

import { IDayCellLayout } from '../data';

const defineText = (day: string) => {
  const subDay = day.substring(0, 3);
  return subDay.charAt(0).toUpperCase() + subDay.slice(1);
};

const size = width / 4;

export const DayCell: React.FC<IDayCellLayout> = ({ day, events, press }) => (
  <Wrapped testID="DayCell" my={2} onPress={() => press(day)}>
    <Wrapped
      width={size}
      height={size}
      borderRadius="circle"
      borderWidth={1}
      borderColor={day}>
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
