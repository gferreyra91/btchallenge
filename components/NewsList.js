import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import NewsItem from './NewsItem';

const NewsList = ({news, onPress}) => {
  return (
    <FlatList
      data={news}
      renderItem={({item, index}) => (
        <NewsItem news={item} onPress={() => onPress(item)} />
      )}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({});
