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
  const {
    hour,
    type,
    setType,
    eventToEdit,
    setHour: setHourHook,
  } = useCreateEvent();
  const { days, updateDays } = useEvent();
  const { date } = useDate();
  const { showAlert } = useAlert();
  const { openModal } = useModal();

  const [daySelected, setDaySelected] = useState(date.dayName.toLowerCase());

  const Days = createDaysFactory(days);

  useEffect(() => {
    hour !== '' && setHour(type, hour);
  }, [hour]);

  useEffect(() => {
    !isEmpty(eventToEdit) && form.setTouched({ name: true });
  }, []);

  const form = useCreateForm(onSubmit, eventToEdit);

  const hasEvent = !isEmpty(eventToEdit);

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
      showAlert({
        title: `${values.name} ${hasEvent ? `updated` : `created`} `,
        message: `Successfully ${hasEvent ? `updated` : `created`} event.`,
        type: 'success',
      });
      setType('start');
      setHourHook('');
      navigation.goBack();
    } else {
      showAlert({
        title: `Ops...`,
        message: errors[0],
        type: 'error',
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
