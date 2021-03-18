import * as React from 'react';

import { Wrapped } from '~/components/Base/Wrapped';
import { Text as BaseText } from '~/components/Base/Text';
import { Icon } from '~/components/Base/Icon';

import { IDate } from '~/utils/interfaces';
import { IHomeHeaderLayout } from '../data';

const Text = ({ text, ...props }: any) => (
  <BaseText color="white" shadow="text" {...props}>
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

const AddIcon = (props: any) => (
  <Wrapped mb={-1} mr={2} justifyContent="flex-end" shadow="icon">
    <Icon name={'plussquare'} color="white" size={40} {...props} />
  </Wrapped>
);

export const HomeHeader: React.FC<IHomeHeaderLayout> = ({ date, onPress }) => (
  <Wrapped mb={2}>
    <Wrapped my={2} maxHeight={64} alignItems="flex-end" testID={`HomeHeader`}>
      <AddIcon {...{ onPress }} />
    </Wrapped>
    <Wrapped maxHeight={64} center>
      <Date {...date} />
    </Wrapped>
  </Wrapped>
);
