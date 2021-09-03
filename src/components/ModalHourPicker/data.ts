export interface IModalHourPicker {}

export interface IModalHourPickerLayout extends IModalHourPicker {
  title: string;
  date: Date;
  closeModal(): void;
  onChange(event: any, selectedDate: any): void;
}
