import * as React from 'react';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  Page,
  Scroll,
  DayCell,
  Wrapped,
  Spotlight,
  HomeHeader,
  ActionButton,
} from '~/components';

import { IHomeLayout, IHomeList, IHomeListItem } from '../data';

const List = ({ days, selectDay }: IHomeList) => (
  <Wrapped>
    <FlatList
      testID="HomeList"
      data={days}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: 'transparent',
        flexGrow: 0,
      }}
      renderItem={({ item, index }: IHomeListItem) => (
        <Wrapped ml={index === 0 ? 2 : 0} mr={2}>
          <DayCell day={item.day} events={item.events} press={selectDay} />
        </Wrapped>
      )}
      keyExtractor={(_, index: number) => String(index)}
    />
  </Wrapped>
);

export const Home: React.FC<IHomeLayout> = ({
  goToCamera,
  goToCreateEvent,
  ...props
}) => (
  <Wrapped testID="Home" flex={1} bg="white">
    <Page bg="transparent" pt={2}>
      <StatusBar style="dark" />
      <Wrapped mb={2}>
        <HomeHeader />
      </Wrapped>
      <Scroll bg="transparent" flex={1}>
        <List {...props} />
        <Wrapped px={2}>
          <Spotlight onPress={goToCreateEvent} />
        </Wrapped>
      </Scroll>
      <ActionButton onPress={goToCamera} icon="camera" />
    </Page>
  </Wrapped>
);
