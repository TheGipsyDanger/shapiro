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
      <Text font="medium" testID="EventCellName">
        {name}
      </Text>
      <Text font="medium" testID="EventCellCount" color="gray" size={2}>
        {imagesCount} photos
      </Text>
    </Wrapped>
    <Wrapped bg="clean" p={1} px={2} borderRadius="medium">
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
    {...{ onPress }}
    bg={'white'}
    testID="EventCell"
    p={2}
    pb={3}
    mb={3}
    borderBottomWidth={1 / 3}
    borderColor={'black'}>
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
          flex={1}
          testID="EventCellEmptyMessage"
          borderRadius="square"
          bg="clean">
          <C.FakeImage>
            <Text>{'No Photos'}</Text>
          </C.FakeImage>
        </Wrapped>
      )}
    </Wrapped>
  </Wrapped>
);
