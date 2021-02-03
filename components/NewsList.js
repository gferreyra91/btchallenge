import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MOCK_ARTICLES} from '../mocks';
import NewsItem from './NewsItem';

const NewsList = ({onPress}) => {
  return (
    <FlatList
      data={MOCK_ARTICLES}
      renderItem={({item, index}) => (
        <NewsItem news={item} onPress={() => onPress(item.url)} />
      )}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({});
