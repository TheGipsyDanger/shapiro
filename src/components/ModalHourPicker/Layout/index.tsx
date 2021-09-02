import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Button } from '~/components';
import { Wrapped } from '~/components/Base';
import { ModalTitle } from '~/components/Base/Modal';

import { IModalHourPickerLayout } from '../data';

export const ModalHourPicker: React.FC<IModalHourPickerLayout> = ({
  date,
  press,
  onChange,
}) => {
  return (
    <Wrapped>
      <Wrapped center>
        <ModalTitle>Starts at:</ModalTitle>
        <ModalTitle>Ends at:</ModalTitle>
      </Wrapped>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        is24Hour={true}
        mode="time"
        display="spinner"
        onChange={onChange}
      />
      <Button title={'Confirm'} onPress={press} />
    </Wrapped>
  );
};
