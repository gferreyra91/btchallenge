import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/Feed';
import SavedScreen from '../screens/Saved';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return <Icon name="rss" color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return <Icon name="save" color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
