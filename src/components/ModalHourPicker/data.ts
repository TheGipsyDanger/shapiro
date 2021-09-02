export interface IModalHourPicker {}

export interface IModalHourPickerLayout extends IModalHourPicker {
  press(): void;
  date: Date;
  onChange(event: any, selectedDate: any): void;
}
