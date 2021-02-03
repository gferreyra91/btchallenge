import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NewsList from '../components/NewsList';

const Feed = ({navigation}) => {
  return <NewsList onPress={(url) => navigation.navigate('ViewNews', {url})} />;
};

export default Feed;

const styles = StyleSheet.create({});
