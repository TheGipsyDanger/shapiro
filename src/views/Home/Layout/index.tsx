import * as React from 'react';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  Page,
  Icon,
  Scroll,
  Linear,
  DayCell,
  Wrapped,
  Spotlight,
  HomeHeader,
} from '~/components';

import { IHomeLayout, IHomeList, IHomeListItem } from '../data';

const List = ({ days, selectDay }: IHomeList) => (
  <Wrapped>
    <FlatList
      data={days}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: 'transparent',
        flexGrow: 0,
      }}
      renderItem={({ item, index }: IHomeListItem) => (
        <Wrapped ml={index === 0 ? 2 : 0} mr={index !== 7 ? 2 : 0}>
          <DayCell day={item.day} events={item.events} press={selectDay} />
        </Wrapped>
      )}
      keyExtractor={(_, index: number) => String(index)}
    />
  </Wrapped>
);

const ActionButton = ({ onPress }: any) => (
  <Wrapped
    bg="primary"
    position="absolute"
    shadow="iconVery"
    borderRadius="circle"
    right={16}
    bottom={16}
    height={56}
    width={56}>
    <Wrapped {...{ onPress }} flex={1} center>
      <Icon name="camera" color="white" size={30} />
    </Wrapped>
  </Wrapped>
);

export const Home: React.FC<IHomeLayout> = ({
  goToCamera,
  goToCreateEvent,
  ...props
}) => (
  <Linear flex={1}>
    <Page testID="Home" bg="transparent">
      <StatusBar style="light" />
      <Wrapped mb={2}>
        <HomeHeader onPress={goToCreateEvent} />
      </Wrapped>
      <Scroll bg="transparent" flex={1}>
        <List {...props} />
        <Wrapped px={2}>
          <Spotlight />
        </Wrapped>
      </Scroll>
      <ActionButton onPress={goToCamera} />
    </Page>
  </Linear>
);
