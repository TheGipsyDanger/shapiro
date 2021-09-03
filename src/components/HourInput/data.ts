export interface IHourInput {
  placeholder: string;
  label: string;
  errors: any;
  values: any;
  touched: any;
  press(type: string): void;
  onChange(fieldName: string, text: string): void;
}

export interface IHourInputLayout extends IHourInput {
  hasValue: boolean;
  lowerLabel: string;
  inputValue: string;
}
