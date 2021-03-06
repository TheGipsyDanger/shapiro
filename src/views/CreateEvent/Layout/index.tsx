import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Page,
  Scroll,
  Button,
  Wrapped,
  DayInput,
  HourInput,
  ModalHeader,
  EventNameInput,
} from '~/components';

import { ICreateEventLayout } from '@/CreateEvent';

const Separator = ({ children, ...props }: any) => (
  <Wrapped mb={2} {...props}>
    {children}
  </Wrapped>
);

export const CreateEvent = ({
  form: { errors, values, touched, submitForm, isValid },
  title,
  onChange,
  openHourPicker,
  ...props
}: ICreateEventLayout) => {
  return (
    <Wrapped flex={1} bg="white">
      <Page>
        <StatusBar style="dark" />
        <ModalHeader {...{ title }} showIcon={false} />
        <Scroll mx={2}>
          <Separator>
            <EventNameInput {...{ errors, values, touched, onChange }} />
          </Separator>
          <Separator flexDirection="row" justifyContent="space-between">
            <HourInput
              placeholder="09:00"
              label="Start"
              press={openHourPicker}
              {...{ errors, values, touched, onChange }}
            />
            <HourInput
              placeholder="10:00"
              label="Final"
              press={openHourPicker}
              {...{ errors, values, touched, onChange }}
            />
          </Separator>

          <Separator>
            <DayInput {...{ ...props, daySelected: values.day, onChange }} />
          </Separator>

          <Separator mt={2}>
            <Button
              {...{ title }}
              onPress={() => submitForm()}
              disabled={!(isValid && touched.name)}
            />
          </Separator>
        </Scroll>
      </Page>
    </Wrapped>
  );
};
