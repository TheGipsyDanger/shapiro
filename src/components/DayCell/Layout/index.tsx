import * as React from 'react';

import { Wrapped, Text, Card } from '~/components/Base';

import { Metrics } from '~/styles';

const { width } = Metrics;

import { IDayCellLayout } from '../data';

const defineText = (day: string) => {
  const subDay = day.substring(0, 3);
  return subDay.charAt(0).toUpperCase() + subDay.slice(1);
};

const size = width / 3;

export const DayCell: React.FC<IDayCellLayout> = ({ day, events, press }) => (
  <Wrapped testID="DayCell" my={2} onPress={() => press(day)}>
    <Card width={size} height={size}>
      <Wrapped
        height={6}
        bg={day}
        borderTopLeftRadius={4}
        borderTopRightRadius={4}
      />
      <Wrapped flex={1} center>
        <Text
          testID="DayCellTitle"
          size={6}
          color={day}
          font="black"
          textTransform="uppercase">
          {defineText(day)}
        </Text>
        <Text testID="DayCellSubtitle" size={3} color="gray">
          {`${events} events`}
        </Text>
      </Wrapped>
    </Card>
  </Wrapped>
);
