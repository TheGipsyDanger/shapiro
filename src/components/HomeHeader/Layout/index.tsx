import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';

import { IHomeHeaderLayout } from '@/HomeHeader';

export const HomeHeader = ({
  date: { day, dayName, month, year },
}: IHomeHeaderLayout) => (
  <Wrapped testID={`HomeHeader`} center>
    <Text font="black" color="clean" textTransform="uppercase">
      {`${day} ${month} ${dayName} ${year}`}
    </Text>
  </Wrapped>
);
