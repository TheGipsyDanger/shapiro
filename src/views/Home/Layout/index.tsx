import * as React from 'react';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Scroll,
  DayCell,
  Wrapped,
  Spotlight,
  HomeHeader,
  ActionButton,
} from '~/components';

import { IHomeLayout, IHomeList, IHomeListItem } from '../data';
import { t } from 'i18next';

const List = ({ days, selectDay }: IHomeList) => (
  <Wrapped pt={4} pb={2}>
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
        <Wrapped
          {...(index === 0 ? { ml: 3 } : {})}
          {...(index === days.length - 1 ? { mr: 3 } : { mr: 2 })}>
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
    <StatusBar style="dark" />
    <Wrapped height={useSafeAreaInsets().top} />
    <Wrapped pt={4} pb={2}>
      <HomeHeader />
    </Wrapped>
    <Scroll bg="transparent" flex={1}>
      <List {...props} />
      <Wrapped px={3}>
        <Spotlight onPress={goToCreateEvent} />
        <Wrapped height={80} />
      </Wrapped>
    </Scroll>
    <ActionButton onPress={goToCamera} icon="camera" />
  </Wrapped>
);
