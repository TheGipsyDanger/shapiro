import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';
import { Title } from './Title';
import { Image } from './Image';

import { IEventCellLayout, IImage } from '@/EventCell';
import C from './styles';

export const EventCell = ({
  images,
  onPress,
  imagesCount,
  ...props
}: IEventCellLayout) => (
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
