import * as React from 'react';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ModalHeader, Page, Wrapped, ActionButton, Text } from '~/components';

import { IImagesOfEventLayout } from '@/ImagesOfEvent';

import C from './styles';

export const ImagesOfEvent: React.FC<IImagesOfEventLayout> = ({
  goTo,
  showAlert,
  currentEvent,
}) => (
  <Wrapped flex={1} bg="white" testID={`ImagesOfEvent`}>
    <Page>
      <StatusBar style="dark" />
      <ModalHeader title={`${currentEvent.name}`} />
      <FlatList
        ListEmptyComponent={
          <Wrapped mx={2} bg="clean" flex={1} borderRadius="square">
            <C.FakeImage>
              <Text>{'No Photos'}</Text>
            </C.FakeImage>
          </Wrapped>
        }
        testID={`ImagesOfEventList`}
        numColumns={4}
        data={currentEvent.images}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: img, index }: any) => (
          <C.ImageContainer
            testID="ImagesOfEventListItem"
            center
            onPress={() => goTo(index)}>
            <C.Image
              source={{
                uri: img,
              }}
            />
          </C.ImageContainer>
        )}
        keyExtractor={(_, index: number) => String(index)}
      />
      <ActionButton onPress={showAlert} icon="delete" type="delete" />
    </Page>
  </Wrapped>
);
