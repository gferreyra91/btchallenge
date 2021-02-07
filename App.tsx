/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigators/MainNavigator';
import {ThemeProvider} from 'react-native-elements';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
