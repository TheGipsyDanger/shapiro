import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Button } from '~/components/Button';
import { Wrapped } from '~/components/Base';
import { ModalTitle } from '~/components/Base/Modal';

import { IModalHourPickerLayout } from '@/ModalHourPicker';

export const ModalHourPicker = ({
  date,
  title,
  onChange,
  closeModal,
}: IModalHourPickerLayout) => {
  return (
    <Wrapped>
      <Wrapped center>
        <ModalTitle>{title}</ModalTitle>
      </Wrapped>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        is24Hour={true}
        mode="time"
        display="spinner"
        onChange={onChange}
      />
      <Button title={'Confirm'} onPress={closeModal} />
    </Wrapped>
  );
};
