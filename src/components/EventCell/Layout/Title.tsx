import { Wrapped, Text } from '~/components/Base';

import { ITitle } from '@/EventCell';

export const Title = ({ name, hour, imagesCount }: ITitle) => (
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
