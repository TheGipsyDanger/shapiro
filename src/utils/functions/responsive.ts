import { Dimensions } from 'react-native';
import { breakpoints } from '~/hooks/Theme';

const { width } = Dimensions.get('screen');

export const responsive = (values: any[]) => {
  if (values.length == 1) return values[0];
  if (width < breakpoints[0]) return values[0];

  const elementIndex = breakpoints.findIndex((item, index) => {
    const maxValue = breakpoints[index + 1];

    if (!maxValue) return true;
    return width >= item && width < maxValue;
  });

  const elementToReturn = values[elementIndex + 1]
    ? values[elementIndex + 1]
    : values[elementIndex];

  return elementToReturn;
};
