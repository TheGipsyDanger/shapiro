import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent, useDate, useAlert, useCreateEvent, useModal } from '~/hooks';
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
  const { hour, type, setType, setHour: setHourHook } = useCreateEvent();
  const { openModal } = useModal();
  const [daySelected, setDaySelected] = useState(date.dayName.toLowerCase());

  const Days = createDaysFactory(days);

  useEffect(() => {
    hour !== '' && setHour(type, hour);
  }, [hour]);

  const form = useCreateForm(onSubmit);

  function onSubmit() {
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
      clean();
      navigation.goBack();
    } else {
      showAlert({
        title: `Ops...`,
        message: errors[0],
        type: 'error',
      });
    }
  }

  function clean() {
    setType('start');
    setHourHook('');
  }

  function openHourPicker(type: string) {
    const modalType = type.toLocaleLowerCase();
    setHourHook('');
    setType(modalType);
    openModal('ModalHourPicker');
  }

  function setHour(type: string, hour: string) {
    const fieldName = type === 'start' ? type : 'final';
    onChange(fieldName, hour);
  }

  function onChange(fieldName: string, text: string) {
    form.setFieldTouched(fieldName);
    form.setFieldValue(fieldName, text);
  }

  const layoutProps = {
    ...props,
    form,
    onChange,
    daySelected,
    setDaySelected,
    openHourPicker,
    days: Days.daysName(),
  };

  return <Layout {...layoutProps} />;
};
