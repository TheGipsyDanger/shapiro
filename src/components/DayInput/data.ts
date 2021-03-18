export interface IDayInput {
  days: string[];
  daySelected: string;
  onChange(fieldName: string, text: string): void;
}

export interface IDayInputLayout extends IDayInput {}
