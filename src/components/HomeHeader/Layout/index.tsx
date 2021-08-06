import * as React from 'react';

import { Wrapped } from '~/components/Base/Wrapped';
import { Text as BaseText } from '~/components/Base/Text';

import { IDate } from '~/utils/interfaces';
import { IHomeHeaderLayout } from '../data';

const Text = ({ text, ...props }: any) => (
  <BaseText color="primary" {...props}>
    {text}
  </BaseText>
);

const Date = ({ day, dayName, month, year }: IDate) => (
  <Wrapped flexDirection="row">
    <Wrapped ml={2} justifyContent="flex-end">
      <Text text={day} font="light" size={8} />
    </Wrapped>
    <Wrapped ml={2} justifyContent="flex-end">
      <Text text={dayName} font="medium" />
      <Wrapped flexDirection="row">
        <Text text={month} font="light" />
        <Text text={` ${year}`} font="light" />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);

export const HomeHeader: React.FC<IHomeHeaderLayout> = ({ date }) => (
  <Wrapped mb={2} testID={`HomeHeader`}>
    <Wrapped maxHeight={64} center>
      <Date {...date} />
    </Wrapped>
  </Wrapped>
);
