interface ILinearColors {
  color_1: string;
  color_2: string;
}

export function defineLinearColors(day: string): ILinearColors {
  const colors: { [key: string]: ILinearColors } = {
    monday: { color_1: '#FF3366', color_2: '#4C5270' },
    tuesday: { color_1: '#2EC4B6', color_2: '#FF3366' },
    wednesday: { color_1: '#2EC4B6', color_2: '#531CB3' },
    thursday: { color_1: '#20A4F3', color_2: '#2EC4B6' },
    friday: { color_1: '#F35B04', color_2: '#531CB3' },
    saturday: { color_1: '#531CB3', color_2: '#cd89d0' },
    sunday: { color_1: '#F79232', color_2: '#F15A2A' },
  };
  return colors[day];
}
