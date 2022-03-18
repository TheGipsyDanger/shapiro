import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';

import { IDayCellLayout } from '@/DayCell';

export const DayCell = ({
  day,
  size,
  press,
  isToday,
  defineText,
}: IDayCellLayout) => (
  <Wrapped testID="DayCell" onPress={() => press(day)}>
    <Wrapped width={size} height={size} bg={day} borderRadius={'circle'} center>
      <Wrapped
        width={size - 6}
        height={size - 6}
        borderColor="white"
        borderWidth={isToday ? 2 : 0}
        borderRadius={'circle'}>
        <Wrapped flex={1} center>
          <Text
            testID="DayCellTitle"
            size={4}
            color="white"
            font="black"
            textTransform="uppercase">
            {defineText(day)}
          </Text>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
