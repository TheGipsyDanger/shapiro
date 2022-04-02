import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import isEmpty from 'lodash/isEmpty';

import { useEvent, useDate, useCreateEvent, useModal } from '~/hooks';
import {
  t,
  IDayNames,
  IEditEvent,
  useCreateForm,
  createDaysFactory,
  createEventFactory,
} from '~/utils';

import { ICreateEvent } from '@/CreateEvent';
import { CreateEvent as Layout } from './Layout';

export const CreateEvent = (props: ICreateEvent) => {
  const navigation = useNavigation();
  const { date } = useDate();
  const { days, updateDays } = useEvent();
  const { openModal } = useModal();
  const {
    hour,
    type,
    setType,
    eventToEdit,
    setEventToEdit,
    setHour: setHourHook,
  } = useCreateEvent();

  const [daySelected, setDaySelected] = useState(date.dayName.toLowerCase());

  const hasEvent = !isEmpty(eventToEdit);

  const text1 = t(
    hasEvent ? 'ALERTS.UPDATED_SUCCESS_TITLE' : 'ALERTS.CREATED_SUCCESS_TITLE'
  );

  const text2 = t(
    hasEvent
      ? 'ALERTS.UPDATED_SUCCESS_SUBTITLE'
      : 'ALERTS.CREATED_SUCCESS_SUBTITLE'
  );

  const Days = createDaysFactory(days);

  useEffect(() => {
    hour !== '' && setHour(type, hour);
  }, [hour]);

  useEffect(() => {
    if (!isEmpty(eventToEdit)) {
      form.setTouched({ name: true });
    }
    return () => {
      form.resetForm();
      setEventToEdit({} as IEditEvent);
    };
  }, []);

  const form = useCreateForm(onSubmit, eventToEdit);

  function onSubmit() {
    const { values } = form;

    const dayToSave = Days.selectedDay(values.day as IDayNames);
    const Event = createEventFactory(dayToSave);

    const { success, errors } = Event.checkEventIsValid(
      values,
      eventToEdit.id || ''
    );

    if (success) {
      const days = Days.updateDay(
        hasEvent
          ? Event.editEvent(values, eventToEdit.id)
          : Event.createEvent(values)
      );
      updateDays(days);
      setType('start');
      setHourHook('');
      navigation.goBack();
      Toast.show({
        type: 'success',
        text1: `${values.name} ${text1}`,
        text2,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: `Ops...`,
        text2: errors[0],
      });
    }
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
    title: hasEvent ? 'Edit event' : 'Create event',
  };

  return <Layout {...layoutProps} />;
};
