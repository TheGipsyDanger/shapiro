export interface ICreateEvent {
  data?: any;
}

export interface ICreateEventLayout extends ICreateEvent {
  form: any;
  days: string[];
  daySelected: string;
  openHourPicker(type: string): void;
  onChange(fieldName: string, text: string): void;
  setDaySelected(text: string): void;
}

export interface IDayList {
  days: string[];
  daySelected: string;
  onChange(fieldName: string, text: string): void;
}
