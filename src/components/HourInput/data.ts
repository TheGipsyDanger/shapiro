export interface IHourInput {
  placeholder: string;
  label: string;
  errors: any;
  values: any;
  touched: any;
  onChange(fieldName: string, text: string): void;
}

export interface IHourInputLayout extends IHourInput {}
