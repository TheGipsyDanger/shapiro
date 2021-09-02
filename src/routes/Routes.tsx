import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as views from '../views';

import { inTest } from '../../app.json';

const Stack = createStackNavigator();

const allViews: { [key: string]: any } = {
  ...views,
};

function defineRoutesProps(name: string) {
  return {
    name,
    options: { headerShown: false },
    component: allViews[name],
  };
}

const flows = {
  default: Object.keys(views),
  test: ['Test'],
};

const isTestFlow = inTest ? 'test' : 'default';

export default function Routes() {
  return (
    <Stack.Navigator mode="modal">
      {flows[isTestFlow].map((viewName: string) => (
        <Stack.Screen key={viewName} {...defineRoutesProps(viewName)} />
      ))}
    </Stack.Navigator>
  );
}
