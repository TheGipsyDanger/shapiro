import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as views from '../views';

import { inTest } from '../../app.json';

interface IRoutes {
  goToIntro: boolean;
}

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

export default function Routes({ goToIntro }: IRoutes) {
  const initialRouteName = inTest ? 'Test' : goToIntro ? 'Welcome' : 'Home';

  return (
    <Stack.Navigator mode="modal" initialRouteName={initialRouteName}>
      {Object.keys(views).map((viewName: string) => (
        <Stack.Screen key={viewName} {...defineRoutesProps(viewName)} />
      ))}
    </Stack.Navigator>
  );
}
