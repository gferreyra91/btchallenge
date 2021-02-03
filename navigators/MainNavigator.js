import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import ViewNews from '../screens/ViewNews';
import TabNavigator from './TabNavigator';

const Main = createStackNavigator();

export default function MainNavigator() {
  return (
    <Main.Navigator mode="modal">
      <Main.Screen name="Tabs" component={TabNavigator} />
      <Main.Screen
        name="ViewNews"
        component={ViewNews}
        options={({route}) => ({
          title: route.params.news.title,
          headerRight: () => {
            /* if saveNews is defined the user can save the news,
            otherwise, the news is already saved */
            if (route.params.saveNews)
              return (
                <TouchableHighlight
                  onPress={() => {
                    route.params.saveNews();
                  }}>
                  <Text>Save</Text>
                </TouchableHighlight>
              );
          },
        })}
      />
    </Main.Navigator>
  );
}
