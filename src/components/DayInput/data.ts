export interface IDayInput {
  days: string[];
  daySelected: string;
  onChange(fieldName: string, text: string): void;
}

export interface IDayInputLayout extends IDayInput {
  dayIndex: number;
  isSelected(day: string): boolean;
}
