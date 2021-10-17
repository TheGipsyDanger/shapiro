import * as React from 'react';

import { Wrapped, Text as BaseText } from '~/components/Base';

import { IDate } from '~/utils';

const Text = ({ text, ...props }: any) => (
  <BaseText font="black" color="clean" textTransform="uppercase" {...props}>
    {text}
  </BaseText>
);

export const Date = ({ day, dayName, month, year }: IDate) => (
  <Wrapped center flexDirection="row">
    <Wrapped>
      <Text text={day} size={9} />
    </Wrapped>
    <Wrapped ml={2} center>
      <Wrapped>
        <Text text={month} size={7} />
        <Text text={dayName} size={7} />
        <Text text={year} size={7} />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
