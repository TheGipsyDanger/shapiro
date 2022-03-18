// @ts-nocheck
import { createRef } from 'react';
import { CommonActions } from '@react-navigation/native';

export const navigationRef = createRef();

export function navigate(name: string, params?: any) {
  navigationRef?.current?.navigate(name, params);
}
