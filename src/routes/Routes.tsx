import * as React from 'react';
import * as views from '../views';
import { Icon } from '~/components';
import { colors } from '~/hooks/Theme';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { inTest } from '../../app.json';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

interface IRoutes {
  goToIntro: boolean;
}

const defineProps = (name: string) => ({
  name,
  key: name,
  options: { headerShown: false },
});

const CreateStack = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      {...defineProps('CreateEvent')}
      component={views.CreateEvent}
    />
  </Stack.Navigator>
);

const ShowStack = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen {...defineProps('ShowImages')} component={views.ShowImages} />
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen {...defineProps('Home')} component={views.Home} />
    <Stack.Screen
      {...defineProps('EventsOfDay')}
      component={views.EventsOfDay}
    />
    <Stack.Screen
      {...defineProps('ImagesOfEvent')}
      component={views.ImagesOfEvent}
    />
  </Stack.Navigator>
);

const AppTab = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
    screenOptions={({ route }) => ({
      unmountOnBlur: true,
      tabBarIcon: ({ focused }) => {
        return (
          <Icon
            name={route.name === 'Home' ? 'profile' : 'plus'}
            color={focused ? colors['black'] : colors['clean']}
            size={22}
          />
        );
      },
    })}>
    <Tab.Screen key="Home" name="Home" component={AppStack} />
    <Tab.Screen key="CreateEvent" name="CreateEvent" component={CreateStack} />
  </Tab.Navigator>
);

export const Routes = ({ goToIntro }: IRoutes) => {
  const initialRouteName = inTest ? 'Test' : goToIntro ? 'Welcome' : 'Home';
  return (
    <Stack.Navigator mode="modal" initialRouteName={initialRouteName}>
      <Stack.Screen {...defineProps('Home')} component={AppTab} />
      <Stack.Screen
        {...defineProps('ShapiroCamera')}
        component={views.ShapiroCamera}
      />
      <Stack.Screen {...defineProps('ShowImages')} component={ShowStack} />
      <Stack.Screen {...defineProps('Welcome')} component={views.Welcome} />
      <Stack.Screen {...defineProps('Test')} component={views.Test} />
    </Stack.Navigator>
  );
};
