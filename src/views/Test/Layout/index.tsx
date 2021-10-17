import * as React from 'react';
import { Button } from 'react-native';
import { useState, useEffect } from 'react';

import { Page, Gallery } from '~/components';
import { useModal, useCreateEvent } from '~/hooks';

import { ITestLayout } from '../data';

export const Test: React.FC<ITestLayout> = ({ data }) => {
  const { openModal, defineCtx } = useModal();
  const { date, type, setType } = useCreateEvent();

  useEffect(() => {}, [date]);

  function updatedDate() {}

  function press() {
    setType(type === 'start' ? 'end' : 'start');
    openModal('ModalHourPicker');
  }

  return <Gallery />;
};
