import { IMapDays, IDays, IDayNames, IDay } from '~/utils';

interface IDaysFactory {
  updateDay(day: IDay): IDays;
  daysWithEvents(): IMapDays[];
  daysName(): string[];
  selectedDay(day: IDayNames): IDay;
}

export function createDaysFactory(days: IDays): IDaysFactory {
  const currentDays = { ...days };

  const daysWithEvents = () => {
    return Object.keys(currentDays).map(day => ({
      day,
      events: days[day as keyof IDays].events.length,
    }));
  };

  const daysName = () => {
    return Object.keys(currentDays);
  };

  const selectedDay = (day: IDayNames) => {
    return {
      [day]: {
        ...currentDays[day.toLowerCase() as IDayNames],
      },
    };
  };

  const updateDay = (day: IDay): IDays => {
    return { ...currentDays, ...day };
  };

  return {
    daysName,
    updateDay,
    selectedDay,
    daysWithEvents,
  };
}
