import { ISliderImage } from '~/utils';

export function defineCorrectIndex(indexToCheck: number): number {
  return indexToCheck % 4;
}

export function generateSliderArray(): ISliderImage[] {
  return [
    { id: '0', uri: 'https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg' },
    ...Array.from({ length: 120 }, (_, i) => ({
      id: String(i + 1),
      uri: 'https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg',
    })),
  ];
}

export function generateIndicatorArray(): ISliderImage[] {
  return generateSliderArray().slice(0, 4);
}
