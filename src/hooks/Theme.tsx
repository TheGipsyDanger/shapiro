import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import moment from 'moment';

import { Metrics } from '~/styles';

export const space = [
  0,
  Metrics.defaultSpace() / 2,
  Metrics.defaultSpace(),
  Metrics.defaultSpace(2),
  Metrics.defaultSpace(3),
  Metrics.defaultSpace(4),
  Metrics.defaultSpace(5),
  Metrics.defaultSpace(6),
  Metrics.defaultSpace(7),
  Metrics.defaultSpace(8),
  Metrics.defaultSpace(9),
  Metrics.defaultSpace(10),
  Metrics.defaultSpace(11),
  Metrics.defaultSpace(12),
];

export const fontSizes = [0, 8, 11, 13, 15, 18, 22, 28, 64, 84];

export const dayColors: { [key: string]: string } = {
  monday: '#4C5270',
  tuesday: '#FF3366',
  wednesday: '#2EC4B6',
  thursday: '#20A4F3',
  friday: '#F35B04',
  saturday: '#531CB3',
  sunday: '#cd89d0',
};

export const colors: { [key: string]: string } = {
  white: '#FFFFFF',
  black: '#444444',
  red: '#E05F5F',
  yellow: '#FFE483',
  orange: '#fbbf96',
  green: '#47CC9C',
  pink: '#fd88a2',
  purple: '#cd89d0',
  tangerine: '#FF9F80',
  text: '#111111',
  imageBorder: '#f4f4f4',
  cleanGray: '#cecece',
  shadowBorder: 'rgba(0,0,0,0.2)',
  opacity: 'rgba(0,0,0,0.4)',
  clean: '#E8E8E8',
  gray: '#757575',
  transparent: 'transparent',
  primary: dayColors[moment().format('dddd').toLowerCase()],
  ...dayColors,
};

export const radii: { [key: string]: number } = {
  square: 4,
  medium: 8,
  round: 17,
  circle: 100,
};

export const shadows: { [key: string]: string } = {
  cell: '0px 0px 8px rgba(0,0,0,0.12)',
  text: '4px 4px 4px  rgba(0, 0, 0, 0.12)',
  icon: '4px 4px 4px  rgba(0, 0, 0, 0.12)',
  iconVery: '0px 0px 8px  rgba(0, 0, 0, 0.3)',
  card: '1px 1px 0px  rgba(0, 0, 0, 0.1)',
  toast: '0px 0px 8px  rgba(0, 0, 0, 0.1)',
  event: '0px 0px 4px  rgba(0, 0, 0, 0.12)',
};

export const theme = {
  radii,
  space,
  colors,
  shadows,
  fontSizes,
};

export const ThemeProvider: React.FC = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
