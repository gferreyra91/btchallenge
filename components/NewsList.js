import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MOCK_ARTICLES} from '../mocks';
import NewsItem from './NewsItem';

const NewsList = () => {
  return (
    <FlatList
      data={MOCK_ARTICLES}
      renderItem={({item, index}) => (
        <NewsItem
          news={item}
          onPress={() => console.log('pressed news', item.title)}
        />
      )}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({});
