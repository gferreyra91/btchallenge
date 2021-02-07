import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ViewNews from '../screens/ViewNews';
import TabNavigator from './TabNavigator';

const Main = createStackNavigator();

export default function MainNavigator() {
  return (
    <Main.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="News" component={TabNavigator} />
      <Main.Screen name="ViewNews" component={ViewNews} />
    </Main.Navigator>
  );
}
