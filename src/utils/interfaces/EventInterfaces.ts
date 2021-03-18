export interface IEventsContext {
  days: IDays;
  selectedDay: IDay;
  spotlightDay: IDay;
  currentEvent: IEvent;
  imageIndex: number;
  updateDays(days: IDays): Promise<any>;
  setImageIndex(imageIndex: number): void;
  setCurrentEvent(day: IEvent): void;
  setSelectedDay(day: IDay): void;
  // selectedDay: IDay;
  // currentEvent: IEvent;
  // currentEventIndex: number;
  // currentImageIndex: number;
  // defineImageIndex(imageIndex: number): void;
  // defineDays(days: Array<IDay>): void;
  // defineCurrentEventIndex(currentEventIndex: number): void;
  // defineCurrentEvent(currentEvent: IEvent): void;
  // defineSelectedDay(selectedDay: IDay): void;
}

export interface IMapDays {
  day: string;
  events: number;
}

export type IDayNames =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface IDay {
  [key: string]: {
    events: IEvent[];
  };
}
export interface IDays {
  monday: {
    events: IEvent[];
  };
  tuesday: {
    events: IEvent[];
  };
  wednesday: {
    events: IEvent[];
  };
  thursday: {
    events: IEvent[];
  };
  friday: {
    events: IEvent[];
  };
  saturday: {
    events: IEvent[];
  };
  sunday: {
    events: IEvent[];
  };
}

export interface ICheckTime {
  hasError: boolean;
  errorsMessage: Array<string>;
}

export interface IEventToSave {
  name: string;
  initial: string;
  final: string;
}

export interface IEvent {
  id: string;
  name: string;
  initial: string;
  final: string;
  images: Array<string>;
}

export interface IFormattedEvent {
  day: IDayNames;
  events: IEvent[];
}

export interface IFormattedImages {
  images: string[];
  imagesCount: number;
}

export interface ICreatedEventStatus {
  success: boolean;
  errors: string[];
}

export interface IData {
  [key: string]: any;
}
export interface IResp {
  success: boolean;
  data: IData | IEvent;
}

export interface ICreateEventForm {
  name: string;
  day: string;
  start: string;
  final: string;
}
