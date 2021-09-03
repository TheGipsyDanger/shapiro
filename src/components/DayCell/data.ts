export interface IDayCell {
  testID?: string;
  day: string;
  events: number;
  press(day: string): void;
}

export interface IDayCellLayout extends IDayCell {
  size: number;
  defineText(day: string): string;
}
