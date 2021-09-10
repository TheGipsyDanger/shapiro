import * as React from 'react';
import { FlatList } from 'react-native';

import { Text, Card, Wrapped } from '~/components/Base';

import { Metrics } from '~/styles';
import { IDayInputLayout } from '@/DayInput';

export const DayInput: React.FC<IDayInputLayout> = ({
  days,
  onChange,
  dayIndex,
  isSelected,
}) => {
  return (
    <>
      <Text>Select day</Text>
      <FlatList
        testID={`DayInput`}
        data={days}
        initialScrollIndex={dayIndex}
        getItemLayout={(_, index) => ({
          length: Metrics.width / 3,
          offset: (Metrics.width / 3) * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{
          flexGrow: 0,
        }}
        renderItem={({ item: day }: any) => (
          <Wrapped onPress={() => onChange('day', day)}>
            <Card
              center
              py={3}
              my={2}
              mr={2}
              width={Metrics.width / 3}
              borderWidth={isSelected(day) ? 1 : 0}
              borderColor="black">
              <Text size={4}>{day}</Text>
            </Card>
          </Wrapped>
        )}
        keyExtractor={(_, index: number) => String(index)}
      />
    </>
  );
};
