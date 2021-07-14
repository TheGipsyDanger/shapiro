import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent, useDate, useAlert } from '~/hooks';
import {
  IDayNames,
  useCreateForm,
  createDaysFactory,
  createEventFactory,
} from '~/utils';

import { ICreateEvent } from './data';
import { CreateEvent as Layout } from './Layout';

export const CreateEvent: React.FC<ICreateEvent> = props => {
  const navigation = useNavigation();
  const { days, updateDays } = useEvent();
  const { date } = useDate();
  const { showAlert } = useAlert();

  const [daySelected, setDaySelected] = useState(date.dayName.toLowerCase());

  const Days = createDaysFactory(days);

  const onSubmit = () => {
    const { values } = form;

    const dayToSave = Days.selectedDay(values.day as IDayNames);
    const Event = createEventFactory(dayToSave);

    const { success, errors } = Event.checkEventIsValid(values);

    if (success) {
      const days = Days.updateDay(Event.createEvent(values));
      updateDays(days);
      showAlert({
        title: `${values.name} created`,
        message: 'Successfully created event.',
        type: 'success',
      });
      navigation.goBack();
    } else {
      showAlert({
        title: `Ops...`,
        message: errors[0],
        type: 'error',
      });
    }
  };

  const form = useCreateForm(onSubmit);

  const onChange = (fieldName: string, text: string) => {
    form.setFieldTouched(fieldName);
    form.setFieldValue(fieldName, text);
  };

  const layoutProps = {
    ...props,
    form,
    onChange,
    daySelected,
    setDaySelected,
    days: Days.daysName(),
  };

  return <Layout {...layoutProps} />;
};
