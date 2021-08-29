import * as React from 'react';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Page, Wrapped } from '../../../components';

import { ITestLayout } from '../data';

export const Test: React.FC<ITestLayout> = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
    <Page>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        is24Hour={true}
        mode="time"
        display="spinner"
        onChange={() => {}}
      />
    </Page>
  );
};
