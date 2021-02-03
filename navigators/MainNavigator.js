import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ViewNews from '../screens/ViewNews';
import TabNavigator from './TabNavigator';

const Main = createStackNavigator();

export default function MainNavigator() {
  return (
    <Main.Navigator mode="modal">
      <Main.Screen name="Tabs" component={TabNavigator} />
      <Main.Screen name="ViewNews" component={ViewNews} />
    </Main.Navigator>
  );
}
