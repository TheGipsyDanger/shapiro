import * as React from 'react';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ModalHeader, Page, Wrapped, Text, Scroll } from '~/components';

import { IImagesOfEventLayout } from '../data';

import C from './styles';

export const ImagesOfEvent: React.FC<IImagesOfEventLayout> = ({
  goTo,
  currentEvent,
}) => (
  <Wrapped flex={1} bg="white">
    <Page>
      <StatusBar style="dark" />
      <ModalHeader title={`${currentEvent.name}`} />
      <FlatList
        testID={`ImagesOfEvent`}
        numColumns={4}
        data={currentEvent.images}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: img, index }: any) => (
          <C.ImageContainer center onPress={() => goTo(index)}>
            <C.Image
              source={{
                uri: img,
              }}
            />
          </C.ImageContainer>
        )}
        keyExtractor={(_, index: number) => String(index)}
      />
    </Page>
  </Wrapped>
);
