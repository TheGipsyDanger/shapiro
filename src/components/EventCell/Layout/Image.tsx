import { Wrapped } from '~/components/Base';

import { IImage } from '@/EventCell';

import C from './styles';

export const Image = ({ image }: IImage) => (
  <Wrapped
    testID={image !== 'fakeImage' ? 'EventCellImage' : 'EventCellImageFake'}
    boxShadow={'cell'}>
    <C.Image
      source={{
        uri: image,
      }}
    />
  </Wrapped>
);
