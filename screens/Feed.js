import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NewsList from '../components/NewsList';

const Feed = ({navigation}) => {
  return (
    <NewsList
      onPress={(news) =>
        navigation.navigate('ViewNews', {
          news,
          saveNews: () => console.log('save news', news),
        })
      }
    />
  );
};

export default Feed;

const styles = StyleSheet.create({});
