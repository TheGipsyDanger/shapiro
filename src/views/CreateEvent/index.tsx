import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import isEmpty from 'lodash/isEmpty';

import { useEvent, useDate, useAlert, useCreateEvent, useModal } from '~/hooks';
import {
  IDayNames,
  useCreateForm,
  createDaysFactory,
  createEventFactory,
} from '~/utils';

import { ICreateEvent } from '@/CreateEvent';
import { CreateEvent as Layout } from './Layout';

export const CreateEvent: React.FC<ICreateEvent> = props => {
  const navigation = useNavigation();
  const { days, updateDays } = useEvent();
  const { date } = useDate();
  const [daySelected, setDaySelected] = useState(date.dayName.toLowerCase());
  const { showAlert } = useAlert();
  const { openModal } = useModal();
  const {
    hour,
    type,
    setType,
    setHour: setHourHook,
    eventToEdit,
  } = useCreateEvent();

  const Days = createDaysFactory(days);

  useEffect(() => {
    hour !== '' && setHour(type, hour);
  }, [hour]);

  useEffect(() => {
    const hasEvent = !isEmpty(eventToEdit);
    hasEvent && touched();
  }, []);

  const form = useCreateForm(onSubmit, eventToEdit);

  function touched() {
    form.setTouched({ name: true });
  }

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
