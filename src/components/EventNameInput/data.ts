export interface IEventNameInput {
  errors: any;
  values: any;
  touched: any;
  onChange(fieldName: string, text: string): void;
}

export interface IEventNameInputLayout extends IEventNameInput {}
