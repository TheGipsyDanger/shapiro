import * as React from 'react';

import { Wrapped } from '~/components/Base/Wrapped';
import { Text } from '~/components/Base/Text';
import { shadows } from '~/hooks/Theme';

import { IEventCellLayout, IImage, IImages } from '../data';

import C from './styles';

const Image = ({ image }: IImage) => (
  <Wrapped
    testID={image !== 'fakeImage' ? 'EventCellImage' : 'EventCellImageFake'}
    boxShadow={shadows.cell}>
    <C.Image
      source={{
        uri: image,
      }}
    />
  </Wrapped>
);

const Title = ({ name, hour, imagesCount }: any) => (
  <Wrapped
    mb={4}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between">
    <Wrapped>
      <Text testID="EventCellName">{name}</Text>
      <Text testID="EventCellCount" color="gray" size={2}>
        {imagesCount} photos
      </Text>
    </Wrapped>
    <Wrapped>
      <Text testID="EventCellName" size={2}>
        {hour}
      </Text>
    </Wrapped>
  </Wrapped>
);

export const EventCell: React.FC<IEventCellLayout> = ({
  images,
  onPress,
  imagesCount,
  ...props
}) => (
  <Wrapped
    bg={'white'}
    testID="EventCell"
    p={2}
    pb={3}
    mb={3}
    borderBottomWidth={1}
    {...{ onPress }}
    borderColor={'primary'}>
    <Title {...props} imagesCount={imagesCount} />
    <Wrapped
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      {imagesCount ? (
        <>
          <Image image={images[0]} />
          <Image image={images[1]} />
          <Image image={images[2]} />
        </>
      ) : (
        <Wrapped
          testID="EventCellEmptyMessage"
          flex={1}
          boxShadow={shadows.cell}>
          <C.FakeImage>
            <Text size={6}>{'No Photos'}</Text>
          </C.FakeImage>
        </Wrapped>
      )}
    </Wrapped>
  </Wrapped>
);
